class Pet {
  constructor (animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }

  get activity () {
    const today = new Date();
    const hour = today.getHours();

    if (hour > 8 && hour <= 20) {
      return 'sleeping';
    } else {
      return 'playing';
    }
  }

  get owner () {
    return this._owner;
  }

  set owner (owner) {
    this._owner = owner;
    console.log(`setter called: ${owner}`);
  }

  speak () {
    console.log(this.sound);
  }
}

class Owner {
  constructor (name, address) {
    this.name = name;
    this.address = address;
  }

  set phone (num) {
    const phoneNum = num.replace(/[^0-9]/g, '');
    this._phone = phoneNum;
  }

  get phone () {
    return this._phone;
  }
}

const miso = new Pet('dog', 8, 'shiba', 'none');

miso.owner = new Owner('Clinton', '123 St');
miso.owner.phone = '5555555555';

console.log(miso.owner);
