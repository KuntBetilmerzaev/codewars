// Description:

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// Solution:

function getAverage(marks){
    let srMark = 0;
    let srMark1 = 0;
    for (let i = 0; i < marks.length; i++) {
        srMark1 += marks[i]
}
    
    srMark = Math.trunc(srMark1 / marks.length)
    return srMark
}

console.log(getAverage([5, 5, 5, 3, 4, 5, 3, 3]));
