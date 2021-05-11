let validator = {
    set: function (obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer');
            } else if (value > 200) {
                throw new RangeError('The age is invalid');
            } else {
                console.log(`Setting value ${value} to ${prop}`);
            }
        }
        if (prop === 'gender') {
            if (Number.isInteger(value)) {
                throw new TypeError('The gender is not an string');
            } else {
                console.log(`Setting value ${value} to ${prop}`);
            }
        }
        // 
        obj[prop] = value;
    },
    get: function (obj, prop) {
        if (obj[prop] === undefined) {
            console.log(false)
        } else {
            console.log(`Trying to access the property ${prop}`);
            return obj[prop]
        }
    }
};


let person = new Proxy({}, validator);




person.age = 100;
// Setting value '100' to 'age'
console.log(person.age);
// Trying to access the property 'age'...
// 100
person.gender = "male";
// Setting value 'male' to 'gender'
person.age = 'young';
// Uncaught TypeError: The age is not an integer
person.age = 300;
// Uncaught RangeError: The age is invalid
