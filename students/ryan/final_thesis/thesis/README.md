# Drawing Discrimination

This visualization explores redlining and discriminatory federal New Deal housing policy’s lasting impact on homeownership, home equity, and wealth building opportunities across New York City.

* [Final Project Page](https://www.ryanabest.com/ms2-2019/thesis/)
* [GitHub Repository](https://github.com/ryanabest/ms2-2019)

<p>This project was completed by <a href='https://www.ryanabest.com'>Ryan Best</a> as part of a <a href='http://parsons.nyc/thesis-2019/'>graduate thesis</a> for the Masters of Science in <a href='https://www.newschool.edu/parsons/ms-data-visualization/'>Data Visualization</a> at the Parsons School of Design in New York, NY.</p>

##### Thesis Advisors
* [Aaron Hill](http://aaronhill.nyc/)
* [Daniel Sauter](http://danielsauter.com/)
* [Christian Swinehart](http://samizdat.co/)
* [Richard The](http://www.richardthe.com/)


### Project Description
In this data visualization thesis project, I explore the lasting impact of redlining and discriminatory federal New Deal housing policy on homeownership, home equity, and wealth building opportunities across New York City. I connect 1938 government redlining maps of the five New York City boroughs and lower Westchester county with longitudinal census data from 1940 to 2010, tracking changes in racial composition and real estate markets within the neighborhoods included within these maps. I identify specific case study comparisons between neighborhoods with similar population demographics or homeownership markets in 1940, connect these communities to the redlining gradings they received at that time, and follow their changing and diverging housing markets through 2010.  My preliminary qualitative analysis of these case studies suggests that property values and homeownership rates were depressed in many neighborhoods across New York City that received poor redlining grades or did not retain a majority white population in the decades after these official government security maps were drawn. Finally, I open up the map for exploration, allowing users to study the redlining map of New York in more detail or investigate potential threads of housing discrimination themselves.

### Data Sources and Methods
<p>Redlining zone boundaries, gradings, and area descriptions (including apprasier quotes) are from the <a  href='https://dsl.richmond.edu/panorama/redlining/'>Mapping Inequality</a> project. Data was downloaded in GeoJSON format for <a  href='https://dsl.richmond.edu/panorama/redlining/#loc=11/40.7940/-73.9570&opacity=0.8&city=manhattan-ny'>Manhttan</a>, <a  href='https://dsl.richmond.edu/panorama/redlining/#loc=11/40.6543/-73.9490&opacity=0.8&city=brooklyn-ny'>Brooklyn</a>, <a  href='https://dsl.richmond.edu/panorama/redlining/#loc=11/40.6840/-73.8268&opacity=0.8&city=queens-ny'>Queens</a>, <a  href='https://dsl.richmond.edu/panorama/redlining/#loc=12/40.8580/-73.8565&opacity=0.8&city=bronx-ny'>the Bronx</a>, <a href='https://dsl.richmond.edu/panorama/redlining/#loc=12/40.5740/-74.1560&opacity=0.8&city=staten-island-ny' >Staten Island</a>, and <a href='https://dsl.richmond.edu/panorama/redlining/#loc=12/40.9360/-73.8250&opacity=0.8&city=lower-westchester-co.-ny'>lower Westchester&nbsp;county</a>.</p>
<p>Census data and tract boundaries for each decennial census from 1940 to 2010 are from the <a  href='https://www.nhgis.org/'>IPUMS NGHIS database</a>. Included in census data by tract were tabular data tables used to estimate percent non&#8209;white, percent homeownership, and median home value.</p>
<p>Census data by tract were joined to redlining zones using geospatial geometric analysis made possible with the <a href='https://pypi.org/project/Shapely/' >Shapely</a> Python library. Census data estimates were weighted by the proportional size of a tract's geographic area of intersection with a redlining zone. Data was averaged across multiple redlining zones for neighboorhoods in case&nbsp;studies.</p>
<p>1939-1941 building images are from the <a href='http://nycma.lunaimaging.com/luna/servlet' >online gallery</a> of the New York City Municipal Archives' Tax Photograph Collection. 2019 building images are from the Google Maps <a href='https://developers.google.com/maps/documentation/streetview/intro' >Street View Static&nbsp;API</a></p>
<p>Geographic boundaries of New York City boroughs are from dwillis' <a href='https://github.com/dwillis/nyc-maps'>nyc-maps</a> GitHub repository</p>
<p>Scrollytelling made possible with&nbsp;<a  href='https://github.com/russellgoldenberg/scrollama'>Scrollama</a>.</p>
<p>Building image comparisons made possible with&nbsp;<a  href='https://juxtapose.knightlab.com/'>JuxtaposeJS</a>.</p>
