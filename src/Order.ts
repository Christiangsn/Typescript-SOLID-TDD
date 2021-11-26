import { Item } from './Item';

export class Order {
  items: Item[];

  constructor() {
    this.items = [];
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  getTaxes() {
    let taxes = 0;

    for (const item of this.items) {
      if (item.Category === 'Beer') {
        taxes += (item.Price * 10) / 100;
      }
      if (item.Category === 'Whisky') {
        taxes += (item.Price * 20) / 100;
      }
    }

    return taxes
  }

  getTotal() {
    let total = 0;
    for (const item of this.items) {
      total += item.Price;
    }
    return total;
  }
}
