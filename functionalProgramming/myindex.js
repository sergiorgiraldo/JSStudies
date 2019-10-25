//npm install -g browserify
const R = require('ramda');

const cities = require('./cities.json');

const KelvinToCelsius = k => {
    return k - 273.15;
};

const updateTemperature = city => {
    const temp = Math.round(KelvinToCelsius(city.temp));
    return R.merge(city, {temp});
};

const updatedCities = cities.map(updateTemperature);

window.Cities = function () {
    return JSON.stringify(cities);
};
window.UpdatedCities = function () {
    return JSON.stringify(updatedCities);
};