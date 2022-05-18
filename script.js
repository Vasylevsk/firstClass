const SIZE_SMALL = {
  price: 50,
  callories: 20,
};

const SIZE_MIDDLE = {
  price: 75,
  callories: 40,
};

const SIZE_LARGE = {
  price: 100,
  callories: 40,
};

const CHEESE = {
  price: 10,
  callories: 20,
};

const SALAD = {
  price: 20,
  callories: 5,
};

const FRIES = {
  price: 15,
  callories: 10,
};

const SEASONINH = {
  price: 15,
  callories: 0,
};

const TOPPING_MAYO = {
  price: 20,
  callories: 5,
};

class Hamburger {
  constructor({ price, callories }) {
    this._price = price;
    this._callories = callories;
  }

  addIngredient({ price, callories }) {
    this._price += price;
    this._callories += callories;
  }

  removeIngredient({ price, callories }) {
    this._price -= price;
    this._callories -= callories;
  }

  getPrice() {
    return this._price;
  }

  getCallories() {
    return this._callories;
  }
}

const hamburger = new Hamburger(SIZE_LARGE);
hamburger.addIngredient(TOPPING_MAYO);
hamburger.addIngredient(CHEESE);
hamburger.removeIngredient(CHEESE); // 120,45
console.log("Price with sauce: " + hamburger.getPrice());
console.log("Callories with sauce: " + hamburger.getCallories());
