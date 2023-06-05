import Currency from "./currency"



export default class Prices {
    public amount = 0;
    public currency?: Currency;


    constructor(amount:number, cur:Currency){
        this.amount = amount;
        this.currency = cur;
    }

    public getAmount(){
        return this.amount;
    }
}


