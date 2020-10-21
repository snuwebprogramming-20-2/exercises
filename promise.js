const fetch = require('node-fetch');
const cheerio = require('cheerio');

const urls = ['https://www.npmjs.com/package/node-fetch',
            'https://www.npmjs.com/package/express',
            'https://www.npmjs.com/package/express-fileupload',
            'https://fmkorea.com'];

const readUrl = (url) => {
    return fetch(url)
    .then(data => {
        return data.text();
    })
    .then(text => {
        const $ = cheerio.load(text);
        return $('title').text();
    })
    .catch(err => {
        console.log(err);
    });
}

Promise.all(urls.map(readUrl))
.then(datas => {
    console.log(datas.length);
    console.log(datas);
});

readUrl('https://www.npmjs.com/package/express-fileupload')
.then(title => console.log(title));

console.log('hello');


// const fetch = require('node-fetch');

// fetch("https://www.npmjs.com/package/express-fileupload")
// .then( data => {
//     return data.text();
// })
// .then(text => {
//     // console.log(text);
// })
// .catch(err => {
    
// });

// const promise1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         const randValue = Math.random();
//         randValue >= 0.5 ? resolve(true) : reject(false)
//     }, 1000);
//   });
  
//   promise1.then(value => {
//     console.log(value);
//   })
//   .catch(err => console.error(err));
