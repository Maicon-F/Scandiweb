import Items  from "./Items";

export default class AttributeSet {
    public id: string ='';
    public name: string = '';
    public type: string= '';
    public items: Items[]= [];


    constructor(id:string, name:string, type:string, items:Items[]){
        this.id = id;
        this.name = name;
        this.type = type;
        this.items = items;
    };

    
}
