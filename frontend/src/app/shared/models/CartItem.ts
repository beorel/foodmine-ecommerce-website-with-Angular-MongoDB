import { Food } from "./foods";

export class CartItem {
  constructor(public food: Food){}
  quantity: number = 1;
  price: number= this.food.price;
}
// export class CartItem {
//   constructor(public food: Food, public quantity: number = 1) {}

//   get price(): number {
//     return this.food.price * this.quantity;
//   }
// }
