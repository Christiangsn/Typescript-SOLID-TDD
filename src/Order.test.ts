import { Item } from './Item';
import { Order } from './Order';

interface TypesItems {
  Category: string
  Description: string
  Price: number;
}

const makeFakeItemOne: TypesItems = {
  Category: 'Beer',
  Description: 'Brahma',
  Price: 10,
};
const makeFakeItemTwo: TypesItems = {
  Category: 'Whisky',
  Description: 'Jack Daniels',
  Price: 100,
};
const makeFakeItemThree: TypesItems = {
  Category: 'Water',
  Description: 'Crystal',
  Price: 2,
};

describe('Orders', () => {
  test('Should create the order', () => {
    // Given -- Dado que

    // Calculo de Impostos
    const order = new Order();
    order.addItem(new Item(makeFakeItemOne)); // 10%
    order.addItem(new Item(makeFakeItemTwo)); // 20%
    order.addItem(new Item(makeFakeItemThree)); // isenta

    // when - quando
    const total = order.getTotal();
    const taxes = order.getTaxes();

    // then - Então
    expect(taxes).toBe(21);
  });
});
