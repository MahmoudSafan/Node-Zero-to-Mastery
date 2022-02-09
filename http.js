// //example 1

// const http = require('http');

// const req = http.request('http://www.google.com', (res) => {
//     res.on('data', (chunk) => {
//         console.log(`Chunck Data: ${chunk}`);
//     });
//     res.on('end', () => {
//         console.log("End of Http Response");
//     });
// });

// req.end();

// -------------------------------------------------------------------------

// // example 2 

// const { request } = require('https')

// const req = request('https://www.google.com', (res) => {
//     res.on('data', (chunk) => {
//         console.log(`Chunk Data: ${chunk}`);
//     });
//     res.on('end', () => {
//         console.log("End of Https Response");
//     });
// });

// req.end();

// -------------------------------------------------------------------------

// // example 3 

const { get } = require('https')

get('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Chunk Data: ${chunk}`);
    });
    res.on('end', () => {
        console.log('End of Https Get method');
    });
});