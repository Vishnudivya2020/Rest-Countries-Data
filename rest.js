//Array function on rest country dada.

// const XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.send();
//All the countries from Asia continent/region using filter function.
xhr.onload = function () {
    const countries = JSON.parse(xhr.response);
    console.log(countries.filter(country => {
        if (country.region == 'Asia') {
            return true;
        }
    }).map(country => country.name.common));

    //The countries with a population of less than 2 lakhs using filter.
    
    console.log(countries.filter(country=>{
        if(country.population<200000){
            return true;
        }
    }));

    // Print the details name, capital,flag using forEach function.
    countries.forEach((country)=>{
        console.log(country.name);
        console.log(country.capital);
        console.log(country.flag);
        console.log(country.population);
});

//The total population of countries using reduce function.
let totalpopulation=countries.reduce((total ,countries)=>total+countries .population,0);
console.log(totalpopulation);

//The country that uses US dollars as currency.

countries.forEach(country=>{
    if(country.currencies&&Object.keys(country.currencies).includes('USD')){
        console.log(country.name.common);
    }
});
}