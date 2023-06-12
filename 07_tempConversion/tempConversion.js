const convertToCelsius = function(temp) {
  let c_temp= Math.round(((5/9)*(temp-32))*10)/10
  return c_temp;
};

const convertToFahrenheit = function(temp) {
  let f_temp= Math.round((temp*1.8+32)*10)/10;
  return f_temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
