let guestList = new WeakSet (); 
let Andrew = {};
let Vasily = {};
let Stepan = {};
let Michael = {};
let Victor = {};

guestList.add(Andrew).add(Vasily).add(Stepan).add(Michael).add(Victor);

console.log(guestList.has(Victor));
console.log(guestList.delete(Michael));
console.log(guestList.has(Michael));
console.log(guestList);

let menu = new Map ();

menu.set('Hot dog', 25).set('Shaurma', 30).set('Pepsi', 10).set('Coffee', 15).set('Beer',90);

console.log(menu.get('Beer'));
console.log(menu.has('Pepsi'));
console.log(menu);

for (var [key, value] of menu) {
    console.log(key + ' - ' + value);
} //first variant

menu.forEach(function(value, key) {
    console.log(`${key} => ${value}`);
});//2-nd variant


menu.clear();
console.log(menu);




let bankVault = new WeakMap ();

let hr23={};
let hr24={};
let hr26={};
let hr25={};
let hr27={};
bankVault.set(hr23, 'currency hryvna').set(hr24, 'currency hryvna').set(hr25, 'currency hryvna').set(hr26, 'currency hryvna').set(hr27, 'currency hryvna');

console.log(bankVault.get(hr23));
console.log(bankVault.delete(hr24));
console.log(bankVault.has(hr24));


let coinColection = new Set ();

coinColection.add('1 Dirham').add('3 Frank').add('50 cent').add('5 Poish').add('20 Pesos');

console.log (coinColection);

coinColection.clear();

console.log (coinColection);

