const reverseString = function(str) {
    let len= str.length;
    let str_bld= '';
    for (let i= len-1; i>=0;i--){
        str_bld += str[i];
    }
    return str_bld;

};

// Do not edit below this line
module.exports = reverseString;
