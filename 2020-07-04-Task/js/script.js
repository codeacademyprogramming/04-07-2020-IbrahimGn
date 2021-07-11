// ----1) Write a JavaScript function to calculate the sum of values in an array. 
/*
 console.log([1, 6, 5].reduce((sum, item) => sum += item, 0));

 or
*/
// function sum(arr) {
//     let result = 0;
//     for (const element of arr) {
//         result += element;
//     }
//     return result;
// }
// console.log(sum([1, 7, 6, -9]));





// ----3) Write a JavaScript function to round up an integer value to the next multiple of 5.
/*
function roundUpIntMultiFive(num) {
    let result = num;
    if (num % 5 != 0) {
        result = num + (5 - num % 5);
    }
    return result;
}
console.log(roundUpIntMultiFive(-11));
*/

// ----4) Write a JavaScript function to get difference between given birth date and current date. It should return number of years, months and days.

/*
function showTimeFromMyBirth(day, month, year) {
    let date = new Date();
    let myBirth = new Date(Math.abs(year), Math.abs(month - 1), Math.abs(day));
    let getYear = date.getFullYear() - myBirth.getFullYear();
    let getMonth = date.getMonth() - myBirth.getMonth();
    let getDay = date.getDate() - myBirth.getDate();
    if (date < myBirth) {
        console.log(`You don't birth!!!`);
        return;
    }
    if (getMonth < 0) {
        getMonth = 12 + getMonth;
        getYear = getYear - 1;
    }
    if (getDay < 0) {
        getDay = 31 + getDay;
        getMonth = getMonth - 1;
    }
    console.log(`year: ${getYear}, month: ${getMonth}, day: ${getDay}`)
}
showTimeFromMyBirth(15, 9, -2019);
*/