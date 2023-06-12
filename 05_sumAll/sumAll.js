const sumAll = function(a, b) {
    let sum= 0;
    if(!(Number.isInteger(a) && Number.isInteger(b))){
        return 'ERROR';
    }


    if (a<0 || b<0 ){
        return 'ERROR';
    }
    if(a<b){
        start= a;
         end=b;
    }

    else{
        start=b;
        end=a;
    }

    for (let i= start; i<=end;i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
