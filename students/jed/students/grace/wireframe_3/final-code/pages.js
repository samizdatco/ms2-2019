// this is the data for holding which page we're on
let pageNumber = 0

// have the content for these pages
const pages = [
  
  {copy: '<h1> <p style="background-color: #FFFFFF">The Pandora&rsquo;s Box of American Consumer Culture</p></h1>', background: '#edc7a9', square: '#3e78ed', img: 'assets/opening_page.jpg', repeat: 'repeat'},
  {copy: '<h3>It is nearly impossible nowadays to travel through America and not come across self-storage facility.</h3>', background: '#edc7a9', square: '#3e78ed'},
  {copy: '<h2><span class="highlightme">&nbsp;Self-storage is EVERYWHERE. </br> &nbsp;There&rsquo;s over 900 facilites&nbsp; </br>&nbsp; in NYC alone.&nbsp; </span></h2>', background: '#a1fffe', square: '#e34a47', img: 'assets/nearbystorageunits.jpg', repeat: 'repeat', size: '100vw 100vh'},
  {copy: '<h3><span class="highlightme">&nbsp;In fact, there are more self-storage facilities than Starbucks and Mcdonalds in the U.S. combined. &nbsp;</span></h3>', background: '#d3c7f3', square: '#ffffff', img: 'assets/facilitycomparison.jpg', repeat: 'no-repeat', size: '100vw 100vh'},
  {copy: '<h3><span class="highlightme">&nbsp;And in terms of space, self-storage also dwarfs both McDonalds&nbsp; &nbsp;and Starbucks.&nbsp;</h3></span>', background: '#faffb8', square: '#b472e6'}, 
  {copy: '<img src="assets/washington_dcmap_mock.png" height ="200"><h3> If all the self-storage facilities were in one city, it would be nearly the size of Washington D.C. </h3>', background: '#faffb8', square: '#b472e6'}, 
  {copy: '<h5 >And the number of households renting self-storage units is at an all-time high. There are about 1.8 million more households than in 2005.</h5>', background: '#faffb8', square: '#b472e6' , img: 'assets/iStock_000014987098_1024x680-1024x680.jpg'}, 
  {copy: '<h2> <span class="highlightme">&nbsp;So, how did we get here?&nbsp; </span> </h2>', background: '#faffb8', square: '#b472e6' , img: 'assets/istockphoto-174899905-1024x1024.jpg', repeat: 'repeat'}, 
  {copy: '<h2> It&rsquo;s no secret that Americans consume lot of stuff.   </h2>', background: '#faffb8', square: '#b472e6', gif: 'assets/giphy.gif', repeat: 'repeat' }, 
  {copy: '<img src="assets/world_consumptionchart.png" width="300" height ="200"> <h3>Based on household final consumption expenditure*, in 2017 alone, U.S. consumers spent over $13 trillion, nearly three times as much as the second largest consumer market, China.  </h3>', background: '#faffb8', square: '#b472e6' }, 
  {copy: '<h3> <span class="highlightme">&nbsp;And the way amount by which &nbsp;</br>&nbsp;we store it is undoubtly unique too.&nbsp; </span></h3>', background: '#faffb8', square: '#b472e6', img: 'assets/istockphoto-174899905-1024x1024.jpg', repeat: 'repeat' }, 
  {copy: '<img src="assets/world_ss_comparison.png" width="600" height ="250"><h3>There are more than 45,000 self-storage facilities in the United States alone. In Europe, there are less than 3,000 total.</h3>', background: '#faffb8', square: '#b472e6' }, 
  {copy: '<img src="assets/624761.jpg" width="300" height ="200"><h3>About 1 out of 10 Americans will use a self-storage facility at least one point in their lives. </br></h3> <h6> source: self-storage association </h6>',  background: '#faffb8', square: '#b472e6' }, 
  {copy: '<h5>And the way amount by which &nbsp;The number of households renting self-storage units is at an all-time high. As Americans go through various stages of their lives self-storage is catering to their material overflow.</h5>', background: '#faffb8', square: '#b472e6',img: 'assets/hoarding.jpg', repeat: 'repeat'}, 
  {copy: '<img src="assets/whypeoplestore_averagetotales.png" width="625" height ="475"><h4>According the 2017 Self-Storage Demand study,  the leading reasons cusomters use self-storage are because they don&rsquo;t have room at home and as a place to temporary store as they change residence. </h4>', background: '#edc7a9', square: '#3e78ed'},
  {copy: '<img src="assets/whypeoplestore_alldemographicscaptions.png" width="725" height ="475"><h4>When broken down by generation, we can see interesting differences in reasons why self-storage is used. </h4>', background: '#edc7a9', square: '#3e78ed'},
  {copy: '<h2> <span class="highlightme">&nbsp;And what are they storing?&nbsp; </span> </h2>', background: '#faffb8', square: '#b472e6' , img: 'assets/istockphoto-174899905-1024x1024.jpg', repeat: 'repeat'}, 
  {copy: '<img src="assets/whatpeoplestore_averagetotales.png" width="600" height ="475"><h4>According the 2017 Self-Storage Demand study,the leading reasons cusomters use self-storage are because they don’t have room at home and as a place to temporary store as they change residence. </h4>', background: '#edc7a9', square: '#3e78ed'},
  {copy: '<img src="assets/whatpeoplestore_alldemographicscaptions.png" width="600" height ="475"><h4>When broken down by generation, there are interesting disparities between disaparties.  </h4>', background: '#edc7a9', square: '#3e78ed'},
  {copy: '<h3>Conclusions</h3>', background: '#edc7a9', square: '#3e78ed'},


  // {copy: `test <svg id="lived3" width="500" height="500"><g><circle cx="50" r="50" cy="100" unicorn="text" align="center"></circle><text x="200" y="250">Text Output</text></g><rect x="500" y="100" width="100" height="100"></rect></svg> `, background: '#faffb8', square: '#b472e6' }
]

// pick the relevant tags
const nextTag = document.querySelector('footer img.next')
const previousTag = document.querySelector('footer img.prev')
const outputTag = document.querySelector('h1','h2','h3', 'h4')
const squareTag = document.querySelector('section div.square')
const bodyTag = document.querySelector('body')

// make a next function to increase the pageNumber
const next = function() {
  pageNumber = pageNumber + 1

  if (pageNumber > pages.length - 1) {
    pageNumber = 0
  }

  updateSection()
}

// make a previous function to decrease the pageNumber
const previous = function() {
  pageNumber = pageNumber - 1

  if (pageNumber < 0) {
    pageNumber = pages.length - 1
  }

  updateSection()
}


// this will update the section's content and style
const updateSection = function() {
  outputTag.innerHTML = pages[pageNumber].copy;
  squareTag.style.backgroundColor = pages[pageNumber].square;
  bodyTag.style.backgroundColor = pages[pageNumber].background;
  // bodyTag.style.backgroundImage = "url('assets/624761.jpg')";
  bodyTag.style.backgroundImage = "url('" + pages[pageNumber].img + "')";
  bodyTag.style.backgroundRepeat = pages[pageNumber].repeat;
  bodyTag.style.backgroundSize = pages[pageNumber].size;
}

// on click of nextTag, run this
nextTag.addEventListener('click', function() {
  next()
})

// on click of previousTag, run this
previousTag.addEventListener('click', function() {
  previous()
})


// when a user presses a key, check for arrow left or right
// and do next or prev correctly
document.addEventListener('keyup', function(event) {
  console.log(event)

  // if the key being pressed is ArrowRight
  if (event.key == 'ArrowRight') {
    next()
  }

  // if the key being pressed is ArrowLeft
  if (event.key == 'ArrowLeft') {
    previous()
  }
})
