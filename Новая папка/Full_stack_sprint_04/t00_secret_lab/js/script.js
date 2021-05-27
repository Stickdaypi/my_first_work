let hero = document.querySelector('#hero')
let fon = document.querySelector('#lab')

function transformation () {
    if (hero.innerHTML === 'Bruce Banner') {
        document.querySelector('#hero').innerHTML = 'Hulk';
        hero.setAttribute ('style', 'font-size: 120px;');
        fon.setAttribute ('style', 'background-color: #70964b;')
    }
    else {
        document.querySelector('#hero').innerHTML = 'Bruce Banner';
        hero.setAttribute ('style', 'font-size: 60px;');
        fon.setAttribute ('style', 'background-color: #ffb300;');
    }
}




