// Code your solution in this file!
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function (x){
    return x.slice(0,2)
}
const returnLastTwoDrivers = function(arr){
    return arr.slice(-2)
}
// console.log(returnLastTwoDrivers(drivers))
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(x){
    return function multiplier(){
        return x**2
    }
}
// console.log(createFareMultiplier(2)())
function fareDoubler(ferari){
    return ferari*2
}
function fareTripler(ferari){
    return ferari*3
}
function selectDifferentDrivers(drivers, returnLastTwoDrivers){
    return returnLastTwoDrivers(drivers)
}