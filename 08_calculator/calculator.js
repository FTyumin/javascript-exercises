const add = function(x,y) {
  return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(array) {
  result=0;
	for(let i=0;i<array.length;i++) {
    result+=array[i];
  }
  return result;
};

const multiply = function(...x) {
  return x*x;
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
