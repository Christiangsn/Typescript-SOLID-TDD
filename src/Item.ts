export class Item {
    public Category: string
    public Description: string
    public Price: number;

    constructor(props: Item) {
        this.Category = props.Category
        this.Description = props.Description
        this.Price = props.Price
    }
}