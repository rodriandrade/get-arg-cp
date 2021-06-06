const cheerio = require('cheerio');
const axios = require('axios');

const getCP = async (prov, loc) =>{
    const provincia = prov.toLowerCase();
    const localidad = loc.replace(/\s/g, '').toLowerCase();
    const html = await axios.get(`https://codigopostal.com.ar/site/manual/${provincia}/${localidad}`);
    const $ = cheerio.load(html.data);
    const heading = $('.jumbotron');
    const output = heading.find('p.lead').text();
    console.log(output);
}

module.exports = getCP;