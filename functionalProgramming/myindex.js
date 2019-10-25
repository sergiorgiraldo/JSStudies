//npm install -g browserify
//npm install -g ramda
const R = require('ramda');

const cities = require('./cities.json');

const KelvinToCelsius = k => {
    return k - 273.15;
};
const KelvinToFahrenheit = k => {
    return k * 9 / 5 - 459.67;
}

const updateTemperature = (convertFn) => {
    return city => {
        const temp = Math.round(convertFn(city.temp));
        return R.merge(city, { temp });
    }    
};

const updateTemperature2 = R.curry((convertFn, city) => {
    const temp = Math.round(convertFn(city.temp));
    return R.merge(city, { temp });
});
  
const updatedCities = cities.map(updateTemperature(KelvinToCelsius));
const updatedCities2 = R.map(updateTemperature2(KelvinToCelsius), cities);

const totalCostReducer = (acc, city) => {
    const { cost = 0 } = city;
    return acc + cost;
}

const totalCost = updatedCities2.reduce(totalCostReducer, 0);
const totalCost2 = R.reduce(totalCostReducer, 0, updatedCities2);

window.Cities = function () {
    return JSON.stringify(cities);
};
window.UpdatedCities = function () {
    return JSON.stringify(updatedCities);
};
window.UpdatedCities2 = function () {
    return JSON.stringify(updatedCities2);
};
window.TotalCost = function () {
    return totalCost;
};
window.TotalCost2 = function () {
    return totalCost2;
};