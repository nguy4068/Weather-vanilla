console.log("Hi there");
console.log("Hiiii");
const temp = document.querySelector(".temperature-degree");
const timeZone = document.getElementsByClassName(".location-timezone");
const unit = document.querySelector(".unit");
const icon = document.getElementById("icon");
var currentUnit = "Farenheit";
temp.addEventListener("click", () => {
  changeDegree();
});

function changeDegree() {
  var currentTempString = temp.innerHTML;
  var currentTemp = parseFloat(currentTempString);
  icon.className = "owi owi-";
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
