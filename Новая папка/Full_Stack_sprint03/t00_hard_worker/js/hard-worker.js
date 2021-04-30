"use strict";
let worker;
class HardWorker {    
      set age(value) { 
      if(value < 100 && value > 1) {
        this._age = value;
      }         
    }
    get age() { 
      return this._age; 
    }

    set salary(value) { 
      if(value < 10000 && value > 100) {
        this._salary = value;
      }
        
    }
    get salary() { 
      return this._salary; 
    }

    toObject() {
      return (`${this.age} ${this.name} ${this.salary}`)
    }     
  
  }  


worker = new HardWorker;
worker.name = 'Bruce';
console.log(worker.name);

worker.age = 50;
worker.salary = 1500;
console.log(worker.toObject());

worker.name = 'Linda';
worker.age = 140;
console.log(worker.toObject());