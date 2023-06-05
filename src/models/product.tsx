import  AttributeSet  from "./attributeSet";
import Price  from "./prices";


export default class Product {
    static id(id: any): string {
        throw new Error('Method not implemented.');
    }
    public prices: Price[] = [];
    public category: string = '';
    public description: string = '';
    public gallery: string[] = [];
    public attributes: AttributeSet[] = [];
    public inStock: boolean = true;
    public brand: string = '';
    public id: string = '';

}
