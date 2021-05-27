let count = 1;
let firstArea = document.getElementById('main');

console.log(firstArea);
let secondArea = document.getElementById('textA');
let cookies = document.cookie;
function addCookies() {
    console.log('fff');
    document.cookie = firstArea.value;    
 
};

// cookies = `cookies = ${encodeURIComponent(firstArea)}`;
console.log (cookies)
let cookies_date = new Date () //текущая дата и время

//cookie_date.setTime( cookie_date.getTime() -1 );
console.log (cookies_date)








// Cookies.set('nameCookie', 'valueCookie', { expires: 30 }); encodeURIcomponent