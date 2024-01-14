const FACTOR = 10;

const convertToCelsius = function(temperature) {
  return Math.round(((temperature - 32) * (5 / 9)) * FACTOR) / FACTOR;
};

const convertToFahrenheit = function(temperature) {
  return Math.round((temperature * (9 / 5) + 32) * FACTOR) / FACTOR;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
