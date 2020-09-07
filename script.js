//Access all of the buttons and elements created by html
console.log("Hi there");
console.log("Hiiii");
const temp = document.querySelector(".temperature-degree");
console.log(temp);
const timeZone = document.querySelector(".location-timezone");
console.log(timeZone);
const unit = document.querySelector(".unit");
console.log(unit);
const icon = document.getElementById("icon");
console.log(icon);
const description = document.querySelector(".temperature-description");
const city = document.querySelector(".city");
console.log(description);
var currentUnit = "Celcius";
var firstTime = true;
var currentTemp = 0;
temp.addEventListener("click", () => {
  changeDegree();
});
window.addEventListener("load", () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      var api =
        "https://api.weatherbit.io/v2.0/current?lat=" +
        lat.toString() +
        "&lon=" +
        long.toString() +
        "&key=d98c16c096b444299c8475a201d1ee2e";
      console.log(api);
      fetch(api)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          var timeZ = data["data"][0]["timezone"].toString();
          console.log(timeZ);
          var city = data["data"][0]["city_name"];
          console.log(city);
          var description = data["data"][0]["weather"][
            "description"
          ].toString();
          console.log(description);
          var tempC = parseInt(data["data"][0]["app_temp"]).toString();
          console.log(tempC);
          var icon = data["data"][0]["weather"]["icon"].toString();
          console.log(icon);
          updateInformation(timeZ, city, tempC, "C", description, icon);
        });
    });
  } else {
    console.log("Can't find");
  }
});

function updateInformation(timezone, cityName, Temp, degree, des, iconFormat) {
  timeZone.innerText = timezone;
  city.innerText = cityName;
  description.innerText = des;
  temp.innerText = Temp;
  icon.className = "" + iconFormat;
  unit.innerText = degree;
}
function changeDegree() {
  var currentTempString = temp.innerHTML;
  if (firstTime) {
    currentTemp = parseFloat(currentTempString);
    firstTime = false;
  }
  if (currentUnit === "Celcius") {
    currentUnit = "Farenheit";
    unit.innerHTML = "F";
    currentTemp = (currentTemp * 9) / 5 + 32;
    temp.innerHTML = parseInt(currentTemp);
  } else if (currentUnit === "Farenheit") {
    currentUnit = "Celcius";
    unit.innerHTML = "C";
    currentTemp = ((currentTemp - 32) * 5) / 9;
    temp.innerHTML = parseInt(currentTemp);
  }
}
