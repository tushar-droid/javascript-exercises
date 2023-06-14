const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	const res= arr.reduce((total, val) =>{
    return total+val
  }, 0);
  return res;
};

const multiply = function(...a) {
  const res= a.reduce((total, val)=>{
    return total*val;
  },1);
  return res;
};

const power = function(a,b) {
  let res= 1;
  for (let i=1;i<=b;i++){
    res =res*a;
  }
  return res;
	
};

const factorial = function(a) {
	res= 1;
  for(let i=a;i>0;i--){
    res= res*i;
  }
  return res;
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
