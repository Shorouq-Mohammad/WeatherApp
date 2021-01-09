# WeatherApp

<img src="https://i.pinimg.com/originals/95/2c/f5/952cf571fbbd84c876c1fd110bef9520.jpg" alt="logo" width="70%" style="margin: 0 auto;" />

Full Stack Weather Application using data from [openweathermap API](https://openweathermap.org/api)

## 📷 project Screenshots

### Desktop and big screens 💻

<img src="./display.png" width="70%" /> 
<img src="./display2.png" width="70%" /> 
<img src="./display3.png" width="70%"/>

### Mobile 📱

<div style="display: grid; grid-template-columns: repeat(3, 1fr); grid-gap:2vw;">
<img src="./Galaxy.png" width="30%" /> 
<img src="./Galaxy2.png" width="30%" /> 
<img src="./Galaxy3.png" width="30%" /> 
</div>

## 🌟 Features 

- It Display **current Location** weather (if the user allowed it) at the top, along with the saved cities weather data in the database. 🌐
- User can **search** by city name to get its weather data. 🔍
- User can **Save/Remove** city data into/from the database. 📥📤
- The city weather data gets **updated** automatically every 3 hours, unless the user clicked on the **refresh** button on specific city to update it before. 🔃 🕒
- Has **responsive** design on different screen sizes.


## 💻 Technology used

- Client-side: JavaScript, jQuery, Handlebars, HTML and CSS
- Server: NodeJs, Express, mongoose 
- Database: MongoDB
- External API is [Open Weather Map API](https://openweathermap.org/api) 

## 🔧 Getting Started

- Clone this repository. You will need `node`, `npm` and `MongoDB` installed globally on your machine.
- **Windows:** run `mongod` in the command line 
- run `npm install`
- run `node server.js`
- Open `http://localhost:3000/` in the browser



