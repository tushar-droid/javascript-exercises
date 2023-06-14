const palindromes = function (str) {
    str= str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"");
    str= str.toLowerCase();
    let j= str.length-1;
    for( let i=0;i<str.length;i++){
        if(str[i]!=str[j]){
            return false;
        }
        j--;
    }
    return true;


};

// Do not edit below this line
module.exports = palindromes;
