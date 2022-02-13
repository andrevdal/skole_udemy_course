const express = require("express");
const https = require("https");

const app = express();

app.get("/", (req, res) => {
  const weatherUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=Asker&appid=7e3def5a2289962133f3bc12fc71e17c&units=metric";
  https.get(weatherUrl, (httpsRes) => {
    console.log(httpsRes.statusCode);
    httpsRes.on("data", (data) => {
      weatherData = JSON.parse(data)
        let temprature = weatherData.main.temp
        let weatherDescription = weatherData.weather[0].description
        let weatherDescriptionIcon = weatherData.weather[0].icon
        let weatherDescriptionIconImg = "http://openweathermap.org/img/wn/" + weatherDescriptionIcon + "@2x.png"
        res.write("<h1>Vret I asker er " + weatherDescription + "</h1>")
        res.write("<h1>Tempraturen i Asker er " + temprature + "<h1>")
        res.write("<img src=" + weatherDescriptionIconImg + ">")
        res.send()
    });
  });
});

app.listen(500, () => {
  console.log("we good in da hood on port 500");
});
