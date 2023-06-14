const findTheOldest = function(lst) {
    const sorted= lst.sort((a,b)=>{
        const currDate= (new Date()).getFullYear(); 
        let prevperson;
        let nextperson;
        if(isNaN(a.yearOfDeath)){
            prevperson= currDate-a.yearOfBirth;

        }
        else{
            prevperson= a.yearOfDeath-a.yearOfBirth;

        }
        if(isNaN(b.yearOfDeath)){
            nextperson= currDate-b.yearOfBirth;

        }
        else{
            nextperson= b.yearOfDeath-b.yearOfBirth;

        }
        if(prevperson>nextperson){
            return -1;
        }
        else{
            return 1;
        }
    })
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
