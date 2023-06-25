import AttributeSet from "./attributeSet";
import Product from "./product";


export default class BagItem{
    public quantity:number = 0;
    public product: Product;
    public selectedColor:string ="";
    public selectedSize:string ="";
    public selectedCapacity:string = ""; 
    public selections: AttributeSet[]= [];



    constructor(product:Product, quantity:number, attributes:AttributeSet[]){
        this.product = product;
        this.quantity = quantity;
        this.selections = attributes;
        
    }


public setProduct(product:Product){
    this.product = product;
}

public getProduct(){
    return this.product;
}

public setQuantity(q:number){
    this.quantity = q;
}

public getQuantity(){
    return this.quantity;
}

public setSelections(s:AttributeSet[]){
    this.selections = s;
}

public getSelections(){
    return this.selections;
}

public getSize(){
    return this.selectedSize;
}

public setSize(size:string){
    this.selectedSize = size;
}

public getCapacity(){
    return this.selectedCapacity;
}

public setCapacity(capacity:string){
    this.selectedCapacity = capacity;
}

public getColor(){
    return this.selectedColor;
}

public setColor(color:string){
    this.selectedColor = color;
}


}
