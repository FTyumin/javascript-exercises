const convertToCelsius = function(x) {
  a= (x-32)*5/9;
  a = Math.round(a*10)/10;
  return a;
};

const convertToFahrenheit = function(x) {
  a=  (9/5)*x+32; 
  a = Math.round(a*10)/10;
  return a;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
