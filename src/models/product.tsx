import  AttributeSet  from "./attributeSet";
import Currency  from "./prices";


export default class Product {
    private prices: Currency[] = [];
    private category: string = '';
    private description: string = '';
    private gallery: string[] = [];
    private attributes: AttributeSet[] = [];
    private inStock: boolean = true;
    private brand: string = '';
    private id: string = '';

}
