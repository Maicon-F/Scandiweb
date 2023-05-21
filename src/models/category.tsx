import Product from "./product";


export default class Category{
    public name:string = '';
    public products?: Product[]= [];


    
public getProducts(){
    return this.products;
}

public getName(){
    return  "teste";
}

}

