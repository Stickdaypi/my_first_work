
let animal;
let age;
let gender;

let regAn = /^[A-Za-z]{1,20}$/;

let reg = /^[1-9][0-9]{0,4}$/;

let regGen = /^male$|^female$|^\s*$/gi;
let regGen1 = /^$/;

flag = true;
let question ='What animal is the superhero most similar to?';
while (flag) {
    animal = prompt (question);
    if (!regAn.test(animal)){
        question ='Неправильно! Введите еще раз';
    } else { 
        flag = false;//request for animal name
    }
    }   

flag = true;  
question = 'How old is the superhero?';
while (flag) {    
    age = prompt (question);
    if(!reg.test (age)){
        question = 'input correct age from 1-99999';
    } else { 
        flag = false;//request for age s hero
    }
}

flag = true;  
question = 'Is the superhero male or female? Leave blank if unknown or other.';
while (flag) {  
    gender = prompt (question);
    if(regGen.test (gender) || regGen1.test (gender)){
        flag = false;//request for gender
    } else { 
        question = 'input correct gender or leave empty';
    }
}

console.log(gender.toLowerCase());

if ( age >= 18) {
    if ( gender.toLowerCase() == 'female') { 
        alert (animal + ' - woman')
    } else { 
        if ( gender.toLowerCase() == 'male') {
        alert (animal + ' - man')
        }
        else {
             alert (animal + ' - hero')
            }
        } 
}
else {
    if (gender.toLowerCase() === 'female') { alert (animal + ' - girl') }
    else {
        if (gender.toLowerCase() === 'male') { alert (animal + ' - boy') }
        else { alert (animal + ' - kid')}
    }
}

