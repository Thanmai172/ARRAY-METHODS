//Get all the countries from Asia continent /region using Filter method
// let countries = [
//     { name: 'Nigeria', continent: 'Africa'},
//     { name: 'Nepal', continent: 'Asia'},
//     { name: 'Angola', continent: 'Africa'},
//     { name: 'Greece', continent: 'Europe'},
//     { name: 'Kenya', continent: 'Africa'},
//     { name: 'Greece', continent: 'Europe'}
// ]

// let asianCountries = countries.filter(country => {
//     return country.continent === 'Asia';
// })

// console.log(asianCountries);




//Get all the countries with a population of less than 2 lakhs using Filter method
// let countries = [
//     { name: 'Nigeria', population: '1,00,000'},
//     { name: 'Nepal', population: '2,00,000'},
//     { name: 'Angola', population: '3,00,000'},
//     { name: 'Greece', population: '4,00,000'},
//     { name: 'Kenya', population: '5,00,000'},
// ]

// let population = countries.filter((a)=>a.population < "2,00,000")

// console.log(population);




//Print the following details name, capital, flag, using forEach method
// List of countries with their respective details
// let countries = [
//     { name: "Russia", capital: "Moscow", flag: "🇷🇺" },
//     { name: "United Kingdom", capital: "London", flag: "🇬🇧" },
//     { name: "Germany", capital: "Berlin", flag: "🇩🇪" }
// ];

// // Using forEach to print the details
// countries.forEach(country => {
//     console.log("`Name:" +country.name, "Capital:" +country.capital, "Flag: " +country.flag);
// });




// Print the total population of countries using reduce method
// let countries = [
//     { name: 'Nigeria', population: '100,000'},
//     { name: 'Nepal', population: '200,000'},
//     { name: 'Angola', population: '300,000'},
//     { name: 'Greece', population: '400,000'},
//     { name: 'Kenya', population: '500,000'},
// ];

// let totalPopulation = countries.reduce((pr, ar) => {
//     return pr + Number(ar.population.replaceAll(',', ''));
// }, 0);

// console.log(totalPopulation);

//Print the country that uses US dollars as currency.

// let countries = [
//     { name: 'Nigeria', currency: 'NGN'},
//     { name: 'Nepal', currency: 'NPR'},
//     { name: 'Angola', currency: 'AOA'},
//     { name: 'Greece', currency: 'EUR'},
//     { name: 'America', currency: 'Dollars'},
// ];

// let UsDollars = countries.find((a)=> a.currency == "Dollars");

// console.log(UsDollars);

