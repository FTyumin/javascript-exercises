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

const multiply = function(array) {
  return array.reduce((total, current) => total*current,1);
}

const power = function(x,y) {
	return x**y;
};

const factorial = function(n) {
	if(n==0 || n==1) {return 1;}
  if(n>1) {
    return n*factorial(n-1);
  }
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
