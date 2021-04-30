let firstName
let lastName

check=/^[a-z]|[а-я]$/gi

firstName = prompt ('Insert first name');

lastName = prompt ('Insert last name');

if (!check.test(firstName && lastName)){
    console.log ('Wrong input!');
    firstName = alert ('Wrong input!');    
} 
else { 
    firstName = firstName[0].toUpperCase(0) + firstName.slice(1);
    lastName = lastName[0].toUpperCase(0) + lastName.slice(1);
    alert (`Greeting ${firstName +' '+ lastName}`);
}