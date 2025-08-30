// orderDTO class
export class OrderDTO {
  id?: number; //id order is optional
  items: OrderItemDTO[] = [];

  // data calculed for all the order items
  get total(): number {
    let sum = 0;
    this.items.forEach((item) => {
      sum += item.subTotal;
    });
    return sum;
  }
}

// orderItemDTO class with constructor
export class OrderItemDTO {
  constructor(
    public productId: number,
    public quantity: number,
    public name: string,
    public price: number,
    public imgUrl: string
  ) {}
  // function to calculate subtotal
  get subTotal(): number {
    return this.price * this.quantity;
  }
}
