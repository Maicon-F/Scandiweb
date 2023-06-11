import Currency from "./currency"



export default class Prices {
    public amount = 0;
    public currency?: Currency;


    constructor(amount:number){
        this.amount = amount;
    }

    
}


