/* const shoe = {
  name: "Nike sb 42",
  size: 46,
  color: "red",
  price: 42.99,
}; */

class Shoe {
  #id = 10;
  name = "adidas";
  getId() {
    return this.#id;
  }
  setId(id) {
    this.#id = id;
  }
}

const shoe = new Shoe();
console.log(shoe);
console.log(shoe.getId());
shoe.setId(22);
console.log(shoe.getId());

class WishList {
  static instance = null;
  constructor() {
    if (WishList.instance) {
      return WishList.instance;
    }
    this.list = [];
    WishList.instance = this;
  }
  addItem(item) {
    this.list.push(item);
  }
}
const wishList = new WishList();
wishList.addItem("ps5");

console.log(wishList);

const wishList2 = new WishList();
wishList2.addItem("xbox");

console.log(wishList);
