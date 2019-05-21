var animate = false,
    showLabels = true,
    showCredits = false,
    startingPosition = "50%",
    label1 = "1939-41",
    label2 = "2019",
    credit1 = "NY Municipal Archives",
    credit2 = "Google Street"
    ;

var juxtaposeDivs = [
   {divID:'#juxtapose-ues',src1:'img/TaxPhotos/Manhattan_A4.jpg',src2:'img/StreetViewPhotos/Manhattan_A4.jpeg'}
  ,{divID:'#juxtapose-harlem',src1:'img/TaxPhotos/Manhattan_D23.jpg',src2:'img/StreetViewPhotos/Manhattan_D23.jpeg'}
  ,{divID:'#juxtapose-queens1',src1:'img/TaxPhotos/Queens_B12.jpg',src2:'img/StreetViewPhotos/Queens_B12.jpeg'}
  ,{divID:'#juxtapose-queens2',src1:'img/TaxPhotos/Queens_D26.jpg',src2:'img/StreetViewPhotos/Queens_D26.jpeg'}
  ,{divID:'#juxtapose-staten1',src1:'img/TaxPhotos/StatenIsland_A3.jpg',src2:'img/StreetViewPhotos/StatenIsland_A3.jpeg'}
  ,{divID:'#juxtapose-staten2',src1:'img/TaxPhotos/StatenIsland_D2.jpg',src2:'img/StreetViewPhotos/StatenIsland_D2.jpeg'}
  ,{divID:'#juxtapose-brooklyn1',src1:'img/TaxPhotos/Brooklyn_C23.jpg',src2:'img/StreetViewPhotos/Brooklyn_C23.jpeg'}
  ,{divID:'#juxtapose-brooklyn2',src1:'img/TaxPhotos/Brooklyn_B4.jpg',src2:'img/StreetViewPhotos/Brooklyn_B4.jpeg'}
  ,{divID:'#juxtapose-bronx1',src1:'img/TaxPhotos/Bronx_C13.jpg',src2:'img/StreetViewPhotos/Bronx_C13.jpeg'}
  ,{divID:'#juxtapose-bronx2',src1:'img/TaxPhotos/Bronx_B8.jpg',src2:'img/StreetViewPhotos/Bronx_B8.jpeg'}
]


juxtaposeDivs.forEach(function(jdiv) {
  newSlider = new juxtapose.JXSlider(jdiv.divID,[{
              src: jdiv.src1,
              label: label1,credit: credit1},{
              src: jdiv.src2,
              label: label2,
              credit: credit2
          }
      ],
      {
          animate: animate,
          showLabels: showLabels,
          showCredits: showCredits,
          startingPosition: startingPosition,
      });

  let juxDiv = d3.select(jdiv.divID);
  let juxContainer = juxDiv.select(function() {return this.parentNode});
  let juxRatio;

  window.addEventListener('load',() => {
    // juxRatio =
    boundingRect = juxContainer.node().getBoundingClientRect();
    juxRatio = boundingRect.height/boundingRect.width;
  });

  window.addEventListener('resize',() => {
    let newWidth = juxContainer.node().getBoundingClientRect().width;
    let newHeight = newWidth * juxRatio;
    d3.select(jdiv.divID).attr('style',"height: "+newHeight+"; width: "+newWidth+";");
  })
})
