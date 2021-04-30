let first = prompt('Input first number of range from 1-99', 1);

do { 
    first }
while ( first > 100 || first < 1 ) { }
 
let last = prompt('Input last number of range from more than first and less than 101', 99);

do { 
     last
}
while ( last > 100 || last < 1 || first > last ) { }

function checkDivision(beginRange, endRange) {
    let output = "";
    for (let i = beginRange; i <= endRange; i++) {
        output += i;
        if ( i%2 === 0 && i%3 === 0 && i%10 === 0) {output += " is even, a multiple of 3, a multiple of 10\n"}
        else if ( i%2 === 0 && i%3 === 0) {output += " is even, a multiple of 3\n"}
        else if ( i%2 === 0 && i%10 === 0) {output += " is even, a multiple of 10\n"}
        else if ( i%2 === 0) {output += " is even\n"}
        else if ( i%3 === 0) {output += " is a multiple of 3\n"}
        else {output += " -\n"}
    }
    console.log(output);
}

checkDivision(first, last);