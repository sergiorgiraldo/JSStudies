const cities = require('./cities.json');
const calcScore = city => {
    const { cost, internetSpeed, foo } = city;
    console.log(city.name + "->" + cost + "->" + internetSpeed + "->" + foo);
}

calcScore(cities[0]);
calcScore(cities[1]);