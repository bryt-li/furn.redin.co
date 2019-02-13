const scrape = require('website-scraper')
const options = {
    recursive: true,
    urls: ['https://alexanderandjamessofas.com/'],
    directory: './static/',
}

// with async/await
//const result = await scrape(options)

// with promise
scrape(options).then(result => {})

// or with callback
//scrape(options, (error, result) => {})
