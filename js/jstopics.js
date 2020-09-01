// arrow functions
var getRegValue = function (p1){
    return 10*p1;
}
console.log(getRegValue(2));

const getArrowValue = (p1) => {
    return 10*p1;
}
console.log(getArrowValue(3));

// filter function
var agesArray = [10,20,30,40];

const checkAdult = (age) => {
    return age>=18;
} 

const filterMethod = () => {
    return agesArray.filter(checkAdult);
}
console.log(filterMethod());