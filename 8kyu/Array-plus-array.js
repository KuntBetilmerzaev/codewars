// Description:

// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// Solution: 

function arrayPlusArray(arr1, arr2) {
    let sumArray = 0;
    let sumArray1 = 0;
    let sumArray2 = 0;
    for (let i = 0; i < arr1.length; i++){
        sumArray1 += arr1[i]
    }
    
    for (let j = 0; j < arr2.length; j++){
        sumArray2 += arr2[j]
    }
    sumArray = sumArray1 + sumArray2
    return sumArray; //something went wrong
    }
    
    console.log(arrayPlusArray([1, 2, 3], [1, 2, 3]));
