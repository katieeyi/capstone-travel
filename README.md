# Project 5 Capstone: Travel App

## Objective:
- To build a travel application that will pull data from different API sources
- The 3 API sources will be [Geonames](http://www.geonames.org/export/web-services.html) for location coordinates, [Weatherbit](https://www.weatherbit.io/account/create) for the weather information, and [Pixabay](https://pixabay.com/api/docs/) for the image.

## Details:
- The app will include a form, where user puts down the location they are traveling to and date that they are departing.
- Behind the scenes, the code will calculate whether the departing date is within a week or beyond a week.
- If the departing date is within a week, current data will be returned. If the departing date is further out, predicted forecast will be returned.

## How We Utilize the APIs:
- Geonames API will return longitude/latitude from the user's location input.
- The coordinates from Geonames will be passed into query for Weatherbit API where we will draw the weather information from.
- Finally, we will use Pixabay to retrieve an image of the location that the user entered.

## Minimum Requirements
- Form asks for trip location and start date
- Returns weather and image of location

## Extra Features Added:
Rubric requires at least 1 extra feature. I decided to try 2, and they're listed below:
1. Add end date and display length of trip
2. Allow user to remove the trip

## Running this App on your Computer with its Dependencies
- Download this file
- Sign up for and procure API keys for Geonames, Weatherbit, and Pixabay. Include them in `.env` file.
- Install all the packages with `npm install`
- To run development mode, use command `npm run build-dev` in terminal.
- To run production mode, use command `npm run build-prod`, then `npm start` and open [http://localhost:8081/](http://localhost:8081/) in your browser.


## Link to Rubric:
-  [Udacity Front End Capstone Rubric](https://review.udacity.com/#!/rubrics/3636/view)
