
class Human {
    constructor (firstName, LastName, gender, age, calories) {
        this.firstName = firstName;
        this.LastName = LastName;
        this.gender = gender;
        this.age = age;
        this.calories = calories;
    }


    sleepFor () {

    }

    feed (x) {
        
        return { x }


    }
}
class Superhero extends Human {
    nickname;

    
    
}

let button = document.querySelector(".botton1").innerHTML = 'eat';
let buttonTwo = document.querySelector(".botton2").innerHTML = 'sleep';
let buttonThree = document.querySelector(".botton3").innerHTML = 'fight';
let buttonFour = document.querySelector(".botton4").innerHTML = 'fly';



console.log (button)




let human = new Human ('John', 'Deer', 'Man', 130, 200)

console.log (human)



