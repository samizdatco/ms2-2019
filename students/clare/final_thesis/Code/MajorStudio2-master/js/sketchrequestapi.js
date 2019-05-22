// query Brooklyn Museum api
// Open preview in a new browser tab and check results returned from API in the browser console
// Reference: https://www.brooklynmuseum.org/opencollection/api/docs/requests

//why do you not have to require jquery
//how to write file
//how to work with object id 
//how to get all 10000 in contemp collection
$(document).ready(function(){
  $.ajax({
    // url: 'https://www.brooklynmuseum.org/api/v2/collection',
    // url: 'https://www.brooklynmuseum.org/api/v2/collection/8',
            url: 'https://www.brooklynmuseum.org/api/v2/artist?nationality=juh&collection_id=8',
    type: 'GET',
    beforeSend: function (xhr) {
      xhr.setRequestHeader('api_key', 'add_key_number');
    },
    data: {},
    success: function (res) {
    //why not res - that gets everything but we just want the data
      console.log('received', res.data);
    },
    error: function (err) {
      console.log('error', err);
    },
  });  
});
