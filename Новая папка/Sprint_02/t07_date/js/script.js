
function getFormattedDate(date)
{
    let day = checkDigits(date.getDate());
    let month = checkDigits(date.getMonth()+1);
    let year = date.getFullYear();
    let hours = checkDigits(date.getHours());
    let minutes = checkDigits(date.getMinutes());

    let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let weekDay = weekDays[date.getDay()];

    return `${day}.${month}.${year} ${hours}:${minutes} ${weekDay}`
}
function checkDigits(num) {    
    return ((num < 10) ? `0${num}` : `${num}`)
}

const date0 = new Date(1993, 11, 1);
const date1 = new Date(1998, 0, -33);
const date2 = new Date('42 03:24:00');

console.log(getFormattedDate(date0));// 01.12.1993 00:00 Wednesday 
console.log(getFormattedDate(date1)); // 28.11.1997 00:00 Friday 
console.log(getFormattedDate(date2)); // 01.01.2042 03:24 Wednesday