class Car {
    _speed = 0;
    constructor(name, model, maxSpeed, color, weight,volume, speed) {
        this.name = name;
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.color = color;
        this.weight = weight;
        this.volume = volume;
        this.speed = speed;
    }

    gas() {
        if (this._speed < this.maxSpeed) {
            this._speed += this.speed;
            console.log(this._speed);
        } else {
            console.log("MAX SPEED! CHECK!")
        }
    }

}

const bmw = new Car ("bmw", 'e 33', 250 , 'ggg', 200, 50, 50);
console.log(bmw)
bmw.gas();
bmw.gas();
bmw.gas();
bmw.gas();
bmw.gas();
bmw.gas();