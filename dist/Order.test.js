"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = require("./Item");
const Order_1 = require("./Order");
const makeFakeItemOne = {
    Category: 'Beer',
    Description: 'Brahma',
    Price: 10,
};
const makeFakeItemTwo = {
    Category: 'Whisky',
    Description: 'Jack Daniels',
    Price: 100,
};
const makeFakeItemThree = {
    Category: 'Water',
    Description: 'Crystal',
    Price: 2,
};
describe('Order', () => {
    test('Should create the order', () => {
        // Given -- Dado que
        // Calculo de Impostos
        const order = new Order_1.Order();
        order.addItem(new Item_1.Item(makeFakeItemOne)); // 10%
        order.addItem(new Item_1.Item(makeFakeItemTwo)); // 20%
        order.addItem(new Item_1.Item(makeFakeItemThree)); // isenta
        // when - quando
        const total = order.getTotal();
        const taxes = order.getTaxes();
        // then - Então
        expect(taxes).toBe(21);
    });
});
