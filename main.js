class Transport {
    constructor(type, name, model) {
        this.type = type;
        this.name = name;
        this.model = model;

    }
    startEngine (){
        console.log(`engine on ${this.name}`)
    }
}


class Car extends Transport {
    constructor(type, name, model,volume, maxSpeed) {
        super(type, name, model);
        this.volume = volume;
        this.maxSpeed = maxSpeed;
    }

    startEngine() {
        console.log(`engine on ${this.name} Started`)
    }

}

class Bike extends Transport{
    constructor(type, name, model, chain) {
        super(type, name, model);
        this.chain = chain;
    }

}

const bmw = new Car('car', 'BMW', 'E 38', 6.4, 450);

console.log(bmw)
bmw.startEngine()


const bikeBmw = new Bike('bike', 'ural', '123', true)
console.log(bikeBmw)
bikeBmw.startEngine()