String.prototype.removeDuplicates = function() {
    str = this.split(" ");
    return [...new Set(str)].join(" ");
    }

let str = "Giant Spiders?   What’s next? Giant Snakes?";


console.log(str);
// Giant Spiders?   What’s next? Giant Snakes?
str = str.removeDuplicates();
console.log(str);
// Giant Spiders? What’s next? Snakes?
str = str.removeDuplicates();
console.log(str);
// Giant Spiders? What’s next? Snakes?


str = ". . . . ? . . . . . . . . . . . ";
console.log(str);
// . . . . ? . . . . . . . . . . .
str = str.removeDuplicates();
console.log(str);
// . ?
