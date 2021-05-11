class Timer {
    id;//stop count
    constructor (title, delay, stopCount) {
        this.title = title;
        this.delay = delay;
        this.stopCount = stopCount;
        this.start();

    } 
    start (){
        console.log (`Timer ${this.title} started (delay=${this.delay}, stopCount=${this.stopCount})`)
        this.id = setInterval(() => this.tick(), this.delay)
        setTimeout(() => this.stop(), this.delay * this.stopCount)//calculate interval countdown lenght
    };  
    tick (){
        this.stopCount--;//minus 
        console.log (`Timer ${this.title} Tick! | cycles left ${this.stopCount}`);
    };  
    stop (){
        console.log (`Timer ${this.title} stopped`);
        clearInterval(this.id)
    };  

}

function runTimer (title,delay,stopCount) {
    let timer = new Timer(title,delay,stopCount);
}


runTimer("Bleep", 1000, 5);
 /*
Console output:
Timer Bleep started (delay=1000, stopCount=5) 
Timer Bleep Tick! | cycles left 4
Timer Bleep Tick! | cycles left 3
Timer Bleep Tick! | cycles left 2
Timer Bleep Tick! | cycles left 1 
Timer Bleep Tick! | cycles left 0 
Timer Bleep stopped
*/
