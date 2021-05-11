class LinkedList {
    constructor(data) {
        this.data = data;
    }
    [Symbol.iterator]() {
        let value = 0;
        return {
            next: () => ({
                value: this.data[value],
                done: this.data[value++] === this.data[this.data.length]
            })
        };
    }
    log() {
        console.log(this.data.join(','));
    }
    remove(x) {
        for (let i = this.data.length - 1; i >= 0; i--) {
            if (this.data[i] === x) {
                this.data.splice(i, 1);
            }
        }
    }
    add(x) {
        this.data.push(x);
    }
    contains(x) {
        if (this.data.includes(x)) {
            return'"true"'
        } else {
            return'"False"'
        }
    }
    clear() {
        this.data = [`""`];
    }
}
function createLinkedList(n) {
    let x = new LinkedList(n);
    return x
}









const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100]);
ll.log();
// "100, 1, 2, 3, 100, 4, 5, 100"
while(ll.remove(100));
ll.log(); // "1, 2, 3, 4, 5" 
ll.add(10);
ll.log(); // "1, 2, 3, 4, 5, 10" 
console.log(ll.contains(10)); // "true"
let sum = 0;
for (const n of ll) {
sum += n; 
}
console.log(sum); // "25" 
ll.clear ();
ll.log ();// ""

