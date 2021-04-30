
class Building {
    Elevator;
    arcCapacity;
    Height;
    constructor(floors, material, address) {
        this.floors = floors;
        this.material = material;
        this.address = address;
    }

    
    getFloorHeight() {

    }

    toString() {
        return [
            `Floors: ${this.floors}`,
            `Material: ${this.material}`,
            `Address: ${this.address}`,
        ].join('\n');
    }
}

class Tower extends Building {

    constructor(floors, material, address){
       super (floors, material, address);
    }

    toString() {
        return [
            `Floors: ${this.floors}`,
            `Material: ${this.material}`,
            `Address: ${this.address}`,
            `Elevator: ${this.hasElevator}`,
            `Arc reactor capacity: ${this.arcCapacity}`,
            `Height: ${this.height}`,
            `Floor height: ${this.height/this.floors}`,

        ].join('\n');
    }
}

/*
Task name: Tower
*/
const starkTower = new Tower(93, 'Different', 'Manhattan, NY'); 
starkTower.hasElevator = true;
starkTower.arcCapacity = 70;
starkTower.height = 1130;
console.log(starkTower.toString()); 


/*   Floors: 93
Material: Different
Address: Manhattan, NY
Elevator: +
Arc reactor capacity: 70
Height: 1130
Floor height: 12.150537634408602 */