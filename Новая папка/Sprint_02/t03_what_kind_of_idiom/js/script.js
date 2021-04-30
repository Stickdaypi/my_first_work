let answer

do {
    answer = Number(prompt('input value is a number, and exactly from 1 to 10'));
} while (answer <= 0 || answer > 10)


switch (answer) {
    case 1: 
    alert('Backtosquare1');
    break;

    case 2:
    alert('Goody 2-shoes');
    break;

    case 3: 
    case 6:
        alert("Two's company, three's a crowd");
    break;
    case 4: 
    case 9:
        alert ('Counting sheep');
    break;
    case 5:
        alert ('Takefive');
    break;

    case 7:
        alert ('Seventh heaven');
    break;

    case 8:
        alert ('Behind the eight-ball');      
    break;
        
    case 10:
        alert ('Cheaper by the dozen');
    break;
    }
    