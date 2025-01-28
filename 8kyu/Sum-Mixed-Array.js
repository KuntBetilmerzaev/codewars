// Description: 

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// Solution:

let sum = 0

function sumMix(x){
    for(let i = 0; i < x.length; i++){
        sum += Number(x[i])
    }
    console.log(sum)
}

sumMix(['2', 3, 4, 5])