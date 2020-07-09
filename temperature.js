// Shows the temperature in Kelvin
const kelvin = 0;

// Converts kelvin to celsius
const celsius = kelvin - 273;

// Converts celsius to farenheit
let fahrenheit = celsius * (9/5) + 32;

// Converts celsius to Newton
let Newton = celsius * (33/100);

// Round down fahrenheit if its a decimal number
fahrenheit = Math.floor(fahrenheit);

// Round down newton if its a decimal number
Newton = Math.floor(Newton);

// Logs the temperature in Fahrenheit
console.log(`The temperature is ${fahrenheit} degress Fahrenheit.`)

// Logs the temperature in Newton
console.log(`The temperature is ${Newton} degress Newton.`)
