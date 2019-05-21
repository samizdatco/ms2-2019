(function(exports) {

  /*
   * d3.cartogram is a d3-friendly implementation of An Algorithm to Construct
   * Continuous Area Cartograms:
   *
   * <http://chrisman.scg.ulaval.ca/G360/dougenik.pdf>
   *
   * It requires topojson to decode TopoJSON-encoded topologies:
   *
   * <http://github.com/mbostock/topojson/>
   *
   * Usage:
   *
   * var cartogram = d3.cartogram()
   *  .projection(d3.geo.albersUsa())
   *  .value(function(d) {
   *    return Math.random() * 100;
   *  });
   * d3.json("path/to/topology.json", function(topology) {
   *  var features = cartogram(topology);
   *  d3.select("svg").selectAll("path")
   *    .data(features)
   *    .enter()
   *    .append("path")
   *      .attr("d", cartogram.path);
   * });
   */
  d3.cartogram = function() {

    function carto(topology, geometries) {
      // copy it first
      topology = copy(topology);

      // objects are projected into screen coordinates

      // project the arcs into screen space
      var tf = transformer(topology.transform),x,y,len1,i1,out1,len2=topology.arcs.length,i2=0,
          projectedArcs = new Array(len2);
          while(i2<len2){
            x = 0;
            y = 0;
            len1 = topology.arcs[i2].length;
            i1 = 0;
            out1 = new Array(len1);
            while(i1<len1){
              topology.arcs[i2][i1][0] = (x += topology.arcs[i2][i1][0]);
              topology.arcs[i2][i1][1] = (y += topology.arcs[i2][i1][1]);
              out1[i1] = projection(tf(topology.arcs[i2][i1]));
              i1++;
            }
            projectedArcs[i2++]=out1;
            
          }

      // path with identity projection
      var path = d3.geo.path()
        .projection(null);

      var objects = object(projectedArcs, {type: "GeometryCollection", geometries: geometries})
          .geometries.map(function(geom) {
            return {
              type: "Feature",
              id: geom.id,
              properties: properties.call(null, geom, topology),
              geometry: geom
            };
          });

      var values = objects.map(value),
          totalValue = d3.sum(values);

      // no iterations; just return the features
      if (iterations <= 0) {
        return objects;
      }

     var i = 0;
      while (i++ < iterations) {
        var areas = objects.map(path.area);
            var totalArea = d3.sum(areas),
            sizeErrorsTot =0,
            sizeErrorsNum=0,
            meta = objects.map(function(o, j) {
              var area = Math.abs(areas[j]), // XXX: why do we have negative areas?
                  v = +values[j],
                  desired = totalArea * v / totalValue,
                  radius = Math.sqrt(area / Math.PI),
                  mass = Math.sqrt(desired / Math.PI) - radius,
                  sizeError = Math.max(area, desired) / Math.min(area, desired);
              sizeErrorsTot+=sizeError;
              sizeErrorsNum++;
              // console.log(o.id, "@", j, "area:", area, "value:", v, "->", desired, radius, mass, sizeError);
              return {
                id:         o.id,
                area:       area,
                centroid:   path.centroid(o),
                value:      v,
                desired:    desired,
                radius:     radius,
                mass:       mass,
                sizeError:  sizeError
              };
            });

        var sizeError = sizeErrorsTot/sizeErrorsNum,
            forceReductionFactor = 1 / (1 + sizeError);

        // console.log("meta:", meta);
        // console.log("  total area:", totalArea);
        // console.log("  force reduction factor:", forceReductionFactor, "mean error:", sizeError);

        var len1,i1,delta,len2=projectedArcs.length,i2=0,delta,len3,i3,centroid,mass,radius,rSquared,dx,dy,distSquared,dist,Fij;
        while(i2<len2){
            len1=projectedArcs[i2].length;
            i1=0;
            while(i1<len1){
              // create an array of vectors: [x, y]
              delta = [0,0];
              len3 = meta.length;
              i3=0;
              while(i3<len3) {
                centroid =  meta[i3].centroid;
                mass =      meta[i3].mass;
                radius =    meta[i3].radius;
                rSquared = (radius*radius);
                dx = projectedArcs[i2][i1][0] - centroid[0];
                dy = projectedArcs[i2][i1][1] - centroid[1];
                distSquared = dx * dx + dy * dy;
                dist=Math.sqrt(distSquared);
                Fij = (dist > radius)
                  ? mass * radius / dist
                  : mass *
                    (distSquared / rSquared) *
                    (4 - 3 * dist / radius);
                delta[0]+=(Fij * cosArctan(dy,dx));
                delta[1]+=(Fij * sinArctan(dy,dx));
                i3++;
              }
            projectedArcs[i2][i1][0] += (delta[0]*forceReductionFactor);
            projectedArcs[i2][i1][1] += (delta[1]*forceReductionFactor);
            i1++;
          }
          i2++;
        }

        // break if we hit the target size error
        if (sizeError <= 1) break;
      }

      return {
        features: objects,
        arcs: projectedArcs
      };
    }

    var iterations = 8,
        projection = d3.geo.albers(),
        properties = function(id) {
          return {};
        },
        value = function(d) {
          return 1;
        };

    // for convenience
    carto.path = d3.geo.path()
      .projection(null);

    carto.iterations = function(i) {
      if (arguments.length) {
        iterations = i;
        return carto;
      } else {
        return iterations;
      }
    };

    carto.value = function(v) {
      if (arguments.length) {
        value = d3.functor(v);
        return carto;
      } else {
        return value;
      }
    };

    carto.projection = function(p) {
      if (arguments.length) {
        projection = p;
        return carto;
      } else {
        return projection;
      }
    };

    carto.feature = function(topology, geom) {
      return {
        type: "Feature",
        id: geom.id,
        properties: properties.call(null, geom, topology),
        geometry: {
          type: geom.type,
          coordinates: topojson.object(topology, geom).coordinates
        }
      };
    };

    carto.features = function(topo, geometries) {
      return geometries.map(function(f) {
        return carto.feature(topo, f);
      });
    };

    carto.properties = function(props) {
      if (arguments.length) {
        properties = d3.functor(props);
        return carto;
      } else {
        return properties;
      }
    };

    return carto;
  };

  var transformer = d3.cartogram.transformer = function(tf) {
    var kx = tf.scale[0],
        ky = tf.scale[1],
        dx = tf.translate[0],
        dy = tf.translate[1];

    function transform(c) {
      return [c[0] * kx + dx, c[1] * ky + dy];
    }

    transform.invert = function(c) {
      return [(c[0] - dx) / kx, (c[1]- dy) / ky];
    };

    return transform;
  };

  function angle(a, b) {
    return Math.atan2(b[1] - a[1], b[0] - a[0]);
  }

  function distance(a, b) {
    var dx = b[0] - a[0],
        dy = b[1] - a[1];
    return Math.sqrt(dx * dx + dy * dy);
  }

  function projector(proj) {
    var types = {
      Point: proj,
      LineString: function(coords) {
        return coords.map(proj);
      },
      MultiLineString: function(arcs) {
        return arcs.map(types.LineString);
      },
      Polygon: function(rings) {
        return rings.map(types.LineString);
      },
      MultiPolygon: function(rings) {
        return rings.map(types.Polygon);
      }
    };
    return function(geom) {
      return types[geom.type](geom.coordinates);
    };
  }
  function cosArctan(dx,dy){
    var div = dx/dy;
    return (dy>0)?
      (1/Math.sqrt(1+(div*div))):
      (-1/Math.sqrt(1+(div*div)));
  }
  function sinArctan(dx,dy){
    var div = dx/dy;
    return (dy>0)?
      (div/Math.sqrt(1+(div*div))):
      (-div/Math.sqrt(1+(div*div)));
  }
  function copy(o) {
    return (o instanceof Array)
      ? o.map(copy)
      : (typeof o === "string" || typeof o === "number")
        ? o
        : copyObject(o);
  }
  
  function copyObject(o) {
    var obj = {};
    for (var k in o) obj[k] = copy(o[k]);
    return obj;
  }

  function object(arcs, o) {
    function arc(i, points) {
      if (points.length) points.pop();
      for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k) {
        points.push(a[k]);
      }
      if (i < 0) reverse(points, n);
    }

    function line(arcs) {
      var points = [];
      for (var i = 0, n = arcs.length; i < n; ++i) arc(arcs[i], points);
      return points;
    }

    function polygon(arcs) {
      return arcs.map(line);
    }

    function geometry(o) {
      o = Object.create(o);
      o.coordinates = geometryType[o.type](o.arcs);
      return o;
    }
    var geometryType = {
      LineString: line,
      MultiLineString: polygon,
      Polygon: polygon,
      MultiPolygon: function(arcs) { return arcs.map(polygon); }
    };

    return o.type === "GeometryCollection"
        ? (o = Object.create(o), o.geometries = o.geometries.map(geometry), o)
        : geometry(o);
  }

  function reverse(array, n) {
    var t, j = array.length, i = j - n; while (i < --j) t = array[i], array[i++] = array[j], array[j] = t;
  }

})(this);

d3map.css
#

path,circle,rect,polygon,ellipse,line {
    vector-effect: non-scaling-stroke;
}
svg, canvas {
    top: 0;
}
#d3MapZoomBox {
    position: absolute;
    z-index: 10;
    height: 100px;
    width: 25px;
    top: 10px;
    right: 50px;
}

#d3MapZoomBox > button {
    height:25px;
    width: 25px;
    line-height: 25px;
}


.d3MapControlsBox > button {
  font-size:22px;
  font-weight:900;
  border: none;
  height:25px;
  width:25px;
  background: rgba(35,31,32,.85);
  color: white;
  padding: 0;
  cursor: pointer;
}

.d3MapControlsBox > button:hover {
  background: black;
}

#d3MapPanBox {
    position: absolute;
    z-index: 10;
    height: 100px;
    width: 25px;
    top: 60px;
    right: 50px;
}
#d3MapPanBox > button {
    height:25px;
    width: 25px;
    line-height: 25px;
}

#d3MapPanBox > button#left {
  position: absolute;
  left: -25px;
  top: 10px;
}

#d3MapPanBox > button#right {
  position: absolute;
  right: -25px;
  top: 10px;
}

#d3MapLayerBox {
    position: relative;
    z-index: 10;
    height: 100px;
    width: 120px;
    top: 10px;
    left: 10px;
    overflow: auto;
    color: white;
    background: rgba(35,31,32,.85);
}

#d3MapLayerBox > div {
    margin: 5px;
    border: none;
}

#d3MapLayerBox ul {
    list-style: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
}
#d3MapLayerBox li {
    list-style: none;
    padding: 0;
}

#d3MapLayerBox li:hover {
    font-weight:700;
}

#d3MapLayerBox li input {
    cursor: pointer;
}

div.d3MapModal {
    position: absolute;
    z-index: 11;
    background: rgba(35,31,32,.90);
    top: 50px;
    left: 50px;
    color: white;
    max-width: 400px;
}

div.d3MapModalContent {
    width:100%;
    height: 100%;
    overflow: auto;
}

div.d3MapModalContent > p {
    padding: 0px 20px;
    margin: 5px 0;
}

div.d3MapModalContent > h1 {
    padding: 0px 20px;
    font-size: 20px;
}

div.d3MapModalArrow {
    content: "";
	width: 0; 
	height: 0; 
	border-left: 20px solid transparent;
	border-right: 20px solid transparent;
	border-top: 20px solid rgba(35,31,32,.90);
        position: absolute;
        bottom: -20px;
        left: 33px;
}


#d3MapSVG {

}

rect.minimap-extent {
    fill: rgba(200,255,255,0.35);
    stroke: black;
    stroke-width: 2px;
    stroke-dasharray: 5 5;
}

circle.newpoints {
    fill: black;
    stroke: red;
    stroke-width: 2px;
}

path.newfeatures {
    fill: steelblue;
    fill-opacity: .5;
    stroke: pink;
    stroke-width: 2px;
}

legend.js
#

d3.svg.legend = function() {
      var data = [];
      var size = [300,20];
      var xScale = d3.scale.linear();
      var scale;
      var title = "Legend";
      var numberFormat = d3.format(".4n");
      var units = "Units";
      var unitTranslate =[0,0];

    function legend(gSelection) {
      
      createLegendData(scale);
      
      var xMin = d3.min(data, function(d) {return d.domain[0]});
      var xMax = d3.max(data, function(d) {return d.domain[1]});
      xScale.domain([xMin,xMax]).range([0,size[0]])

      console.log(data)
      gSelection.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("height", size[1])
//      .attr("width", function (d) {return xScale(d.domain[1]) -  xScale(d.domain[0])})
      .attr("width", size[0] / scale.domain().length)
//      .attr("x", function (d) {return xScale(d.domain[0])})
      .attr("x", function(d,i) {return i * (size[0] / scale.domain().length)})
      .style("fill", function(d) {return d.color})

      gSelection.selectAll("line")
      .data(data)
      .enter()
      .append("line")
//      .attr("x1", function (d) {return xScale(d.domain[0])})
//      .attr("x2", function (d) {return xScale(d.domain[0])})
      .attr("x1", function(d,i) {return (i + .5) * (size[0] / scale.domain().length)})
      .attr("x2", function(d,i) {return (i + .5) * (size[0] / scale.domain().length)})
      .attr("y1", 0)
      .attr("y2", size[1] + 5)
      .style("stroke", "black")
      .style("stroke-width", "2px")

      gSelection.selectAll("text")
      .data(data)
      .enter()
      .append("g")
//      .attr("transform", function (d) {return "translate(" + (xScale(d.domain[0])) +"," + (size[1] + 20) + ")"})
      .attr("transform", function (d,i) {return "translate(" + ((i + .5) * (size[0] / scale.domain().length)) +"," + (size[1] + 20) + ")"})
      .style("text-anchor", "middle")
      .append("text")
      .text(function(d) {return numberFormat(d.domain[0])})

      gSelection.append("text")
      .attr("transform", function (d) {return "translate(" + (xScale(xMin)) +"," + (size[1] - 30) + ")"})
      .text(title)

      gSelection.append("text")
      .attr("transform", function (d) {return "translate(" + (xScale(xMax) + unitTranslate[0]) +"," + (size[1] + 20  + unitTranslate[1]) + ")"})
      .text(units)

      return legend;
    }
    
    function createLegendData(incScale) {
      var rangeArray = incScale.range();
      data = [];
      
      for (x in rangeArray) {
        var colorValue = rangeArray[x];
        if (incScale.invertExtent) {
              var domainValues = incScale.invertExtent(colorValue);
        }
        else {
            if (x == incScale.domain().length) {
            var domainValues = [incScale.domain()[x],incScale.domain()[x]];                  
            }
            else {
            var domainValues = [incScale.domain()[x],incScale.domain()[parseInt(x) + 1]];
            }
        }
        data.push({color: colorValue, domain: domainValues})
      }
    }

    
    legend.scale = function(newScale) {
      if (!arguments.length) return scale;
      scale = newScale;
      return this;
    }

    legend.title = function(newTitle) {
      if (!arguments.length) return title;
      title = newTitle;
      return this;
    }

    legend.unitLabel = function(newUnits) {
      if (!arguments.length) return units;
      units = newUnits;
      return this;
    }

    legend.unitTranslate = function(newTranslate) {
      if (!arguments.length) return unitTranslate;
      unitTranslate = newTranslate;
      return this;
    }
    
    legend.formatter = function(newFormatter) {
      if (!arguments.length) return numberFormat;
      numberFormat = newFormatter;
      return this;
    }

    return legend;
  }


