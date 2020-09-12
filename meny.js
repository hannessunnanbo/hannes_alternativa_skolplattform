const fetch = require("node-fetch");
const xml2js = require('xml2js');

async function hamtaMeny() {
    const RSS_URL = `https://skolmaten.se/orbyskolan2/rss/days/?offset=2`;

    const parser = new xml2js.Parser();

    return fetch(RSS_URL)
      .then(response => response.text())
      .then(async data => {
        const menyData = await parser.parseStringPromise(data);
        console.log(menyData);
        const beskrivning = menyData.rss.channel[0].item[0].description[0];
        return beskrivning;
      });
}

module.exports = {hamtaMeny};