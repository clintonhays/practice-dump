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

    if (hour > 20 && hour <= 22) {
      return 'playing';
    } else {
      return 'sleeping';
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

  set phone (phone) {
    const phoneNormalized = phone.replace(/[^0-9]/g, '');
    this._phone = phoneNormalized;
  }

  get phone () {
    return this._phone;
  }
}

const miso = new Pet('dog', 6, 'shiba', 'sniff');
const mozzy = new Pet('dog', 2, 'frenchie', 'pant');
const brie = new Pet('cat', 4, 'street cat', 'hiss');
const ferguson = new Pet('cat', 3, 'grumpy cat', 'rowr');

miso.owner = new Owner('Rerun', '123 ABC St');

miso.owner.phone = '(123) 456-7890';
