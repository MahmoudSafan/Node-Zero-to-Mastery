const { parse } = require('csv-parse');
const fs = require('fs');

const habitablePlanets = [];

function isHabitable(planets) {
    return planets['koi_disposition'] == 'CONFIRMED' &&
        planets['koi_insol'] > 0.36 && planets['koi_insol'] < 1.11 &&
        planets['koi_prad'] < 1.6

    // koi_insol --> is the amount of solar radiation received on a given surface in a given time period
    // koi_prad --> Planetary Radius - the option to compare the planet to Earth is possible.
}

// fs streaming return a raw buffer of bytes 
fs.createReadStream('./kepler_data.csv')
    // so we pass the return stream to the parse function to return data as JS object
    .pipe(parse({
        comment: '#',
        columns: true
    }))
    .on('data', (data) => {
        if (isHabitable(data))
            habitablePlanets.push(data);
    })
    .on('error', (err) => {
        console.log(err);
    })
    .on('end', () => {
        console.log(`${habitablePlanets.length} Habitable planets was founed!`);
        console.log(habitablePlanets.map(planet => {
            return planet['kepler_name']
        }));
    });