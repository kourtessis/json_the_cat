const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

  request(url, (error, response, body) => {
    if (error) {
      // console.log(error);
      return callback(error); // since no description called, second variable is null for line 9/13/21
    }
    if (!response.statusCode === 200) {
      // console.log('statusCode:', response && response.statusCode);
      return callback('statusCode: !200');
    }// Print the response status code if a response was received
  
    // Print the HTML for the Google homepage.
    const data = JSON.parse(body);
    const cat = data[0];
    if (!cat) {
      // console.log("Cat not found");
      return callback ('Cat not found'); 
    }
    // console.log(cat.description);
    return callback(null, cat.description) // this does not have an error = null 
   
  });

};

module.exports = {
  fetchBreedDescription
};


//original code
// const request = require("request");
// const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + process.argv[2];


// request(url, (error, response, body) => {
//   if (error) {
//     console.log(error);
//     return;
//   };
//   if (!response.statusCode === 200) {
//     console.log('statusCode:', response && response.statusCode);
//     return;
//   }// Print the response status code if a response was received

//   // Print the HTML for the Google homepage.
//   const data = JSON.parse(body);
//   const cat = data[0];
//   if (!cat) {
//     console.log("Cat not found");
//     return;
//   }
//   console.log(cat.description);
 

// });