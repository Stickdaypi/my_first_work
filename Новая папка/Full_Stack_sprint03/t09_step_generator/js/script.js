
let test = /^[0]|[\sA-Za-z]/;


let result = prompt ('Input number', 1)
function* generator () {
    let i = +result;
    while(true) {
        result = prompt(`Previous result: ${i}. Enter a new number:`);     
              
            if(result.match(test)) {
             (alert (`Invalid number!`) );
             yield i;
            }        
        i += +result;
        if(result >= 10000) {
            i = 1;
            }  
        yield  i;          
    }    
}

let gen = generator();
gen.next().value;
gen.next().value;
gen.next().value;
gen.next().value;
gen.next().value;
gen.next().value;


