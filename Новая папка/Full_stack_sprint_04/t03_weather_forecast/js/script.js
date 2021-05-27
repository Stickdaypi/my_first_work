let arr = Array();
const cards = document.getElementById('cards');

fetch('http://api.openweathermap.org/data/2.5/forecast?q=Kyiv&appid=c06dd0d2358495ae8c782fcf21f99aa4&units=metric&lang=ua')
.then(function (resp){return resp.json()})
.then(function (data){
    
        data.list.forEach((item, key) => {          
        console.log(item)
        if(key % 8 === 0) {
            cards.insertAdjacentHTML("beforeEnd",renderDay(item));
        }
    });
    
})

.catch(function () {

});



 function renderDay(item) {
    let date = new Date(item.dt * 1000);
    let render = '';
    render += "<div class=cell>";
    render += date.getMonth() + 1 + '. ' + date.getDate() + '. ' + date.getFullYear() ;
    render += "</br>"    
    render += Math.floor(item.main.temp);
    render += " C";
    render += "</br>"
    render += `<div class="w-image"><img src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" alt="icon"></div>
    <div class="desc">${item.weather[0].description}</div>`
    render += "</div>";
    return render;   
};

console.log(cards);







