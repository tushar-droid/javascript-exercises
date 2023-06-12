const removeFromArray = function(array, ...args) {

    args.forEach(element => {
        let ind= array.indexOf(element);
        if(ind>-1){
            array.splice(ind,1)
        }
    });
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
