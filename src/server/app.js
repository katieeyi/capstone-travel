//Setup empty JS object to act as endpoint for all routes
//let projectData = {};
const dotenv = require('dotenv');
dotenv.config();

const express = require("express");
const app = express();
const fetch = require('node-fetch');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
//app.use(express.static("website"));
app.use(express.static('dist'));

/*
app.get('/', function(req, res) {
    res.status(200).sendFile('dist/index.html')
})
*/

//Set up server port/listener - now in server.js
/*
const port = 8081;
const server = app.listen(port, listening);
//Callback to debug
function listening() {
  console.log(`The server is running on localhost: ${port}`);
}
*/

const geoKey = process.env.GEONAMES_KEY;
const weatherKey = process.env.WEATHERBIT_KEY;
const pixKey = process.env.PIXABAY_KEY;

//POST method route
app.post("/process", async(req, res) => {
  const city = req.body.city;
  let startDate = req.body.startDate;
  let endDate = req.body.endDate;
  const cityResults = await fetch(`http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=${geoKey}`, { method: 'POST' });
  const locationData = await cityResults.json();
  //console.log(locationData);
  let lat = locationData.geonames[0].lat;
  let lon = locationData.geonames[0].lng;
  //Calculate countdown for trip start date
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tripStart = new Date(startDate);
  //Calculate the time difference of two dates in ms
  const countdownTime = tripStart.getTime() - today.getTime();
  //Calculate the # of days between two dates
  const countdownDays = Math.round(countdownTime/(1000 * 3600 * 24));

  //Calculate trip length
  let inputEnd = new Date(endDate);
  const tripLengthTime = inputEnd.getTime() - tripStart.getTime();
  const tripLengthDays = Math.ceil(tripLengthTime / (1000 * 60 * 60 *24));

  const projectData = {
      city: city,
      startDate: startDate,
      countdownDays: countdownDays,
      tripLengthDays: tripLengthDays
  }

  //If the trip is within a week, fetch current weather forecast. If further out, get predicted forecast.
  if(countdownDays < 7) {
      console.log('current data, less than 7 days away!!')
      const weatherResponse = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${weatherKey}&units=I`, { method: 'GET' });
      const currentWeather = await weatherResponse.json();
      console.log(currentWeather);
      projectData.temp = currentWeather.data[0].temp;

  } else {
      console.log("future forecast!")
      const futureResponse = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${weatherKey}&units=I`, {method: 'GET' });
      const futureWeather = await futureResponse.json();
      console.log(futureWeather);
      projectData.temp= futureWeather.data[0].temp;
  }

  try {
      const pixResponse = await fetch(`https://pixabay.com/api/?key=${pixKey}&q=${city}`, { method: 'GET'});
      const pixData = await pixResponse.json();
      let cityPhoto = pixData.hits[0].webformatURL;
      console.log(cityPhoto);
      projectData.cityPhoto = cityPhoto;

  } catch (error) {
      console.log("error",error)
    }
    console.log(projectData);
    res.send(projectData);
});

module.exports = app;
