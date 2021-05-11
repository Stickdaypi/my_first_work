let houseMixin = {

    wordReplace (target, newWord){
        this.description = this.description.replace(target,newWord)
    },// - replace a specified word with another word
    wordInsertAfter (target, ins){
        let result = this.description.split(' ');      
        result.splice(result.indexOf(target) + 1, 0, ins);       
        this.description = result.join(' ');
    },// - insert a word after a specified word
    wordDelete (target){
        this.description = this.description.replace(target,' ')
    },// - delete a specified word
    
    wordEncrypt (){
        this.description = this.description.replace(/[A-Za-z]/g, function (enc) {
            return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(
                "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm".indexOf(enc)
            );//возвращает символ по заданному индексу внутри строки. Индекс первого символа равен нулю, а последнего рассчитывается как значение длины строки - 1 (length - 1).//
        });
    },// - encrypt the text with a rot13 algorithm
    wordDecrypt() {
        this.description = this.description.replace(/[A-Za-z]/g, function (desc) {
            return "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm".charAt(
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(desc)
            );
        });
    }
};


const house = new HouseBuilder('88 Crescent Avenue',
    'Spacious town house with wood flooring, 2-car garage, and a back patio.',
    'J. Smith', 110, 5);

Object.assign(house, houseMixin);

console.log(house.getDaysToBuild()); 
// 220
console.log(house.description);
// Spacious town house with wood flooring, 2-car garage, and a back patio.+

house.wordReplace("wood", "tile");
console.log(house.description);
// Spacious town house with tile flooring, 2-car garage, and a back patio.

house.wordDelete("town ");
console.log(house.description);
// Spacious house with tile flooring, 2-car garage, and a back patio.+

house.wordInsertAfter ("with", "marble");
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.

house.wordEncrypt();
console.log(house.description);
// Fcnpvbhf ubhfr jvgu zneoyr gvyr sybbevat, 2-pne tnentr, naq n onpx cngvb.

house.wordDecrypt();
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.
