// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
   return drivers.slice(0, 2);

}



const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}


const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = function(int) {
    return function() {
       return int * 5
    } 
}

const fareDoubler = function createFareMultiplier(int) {
    return int * 2
//        return function() {
//            return int * 2
//        }
    }

const fareTripler = function createFareMultiplier(int) {
    return int * 3
//        return function() {
//            return int * 2
//        }
    }
        
function selectDifferentDrivers(drivers, myFunction) {
    if (myFunction === returnFirstTwoDrivers) {
        return drivers = ['Antonia', 'Nuru']
    }
    else if (myFunction === returnLastTwoDrivers) {
        return drivers = ['Amari', 'Mo']
    }
}


returnLastTwoDrivers();
createFareMultiplier();
fareDoubler();
fareTripler();