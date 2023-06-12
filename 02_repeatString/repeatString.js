const repeatString = function(st, num) {
    let temp= '';
    if (num<0){
        return "ERROR";
    }
    for (let i= 0; i<num; i++){
        temp= temp+st;
    }
    return temp;
};

// Do not edit below this line
module.exports = repeatString;
