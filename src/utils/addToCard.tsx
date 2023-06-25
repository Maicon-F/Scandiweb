
import AttributeSet from '../models/attributeSet';
import BagItem from '../models/bagItem';
import Prices from '../models/prices';

export function addToCart(myBagItem: BagItem) {

    var { map, amount, arr }: { map: Map<string, BagItem>; amount: number; arr: any; } = ConvertToMap();
    let key = `${myBagItem.getProduct().id}`;
    myBagItem.selections.forEach(a => 
        key = key + a.items[0].value
    )
    var item = map.get(key);

    if (!item)
        item = myBagItem;

    amount = item.getQuantity();
    amount++;
    item?.setQuantity(amount);

    map.set(key, item);
    convertFromMapToCacheObj(map, arr);

}


function ConvertToMap() {
    var map: Map<string, BagItem> = new Map([]);
    var jsonStr: any = localStorage.getItem('products');
    var parsedData = JSON.parse(jsonStr);
    var amount: number = 0;
    var arr: any = [];


    if (parsedData != null) {
        //convert to Map
        parsedData.forEach(function (item: any) {
            var key = item[0];
            var value = item[1];
            var bagItem = new BagItem(value.product, value.quantity, value.selections);
            map.set(key, bagItem);
        });
    }
    return { map, amount, arr };
}

export function removeFromCart(myBagItem: BagItem) {
    var { map, amount, arr }: { map: Map<string, BagItem>; amount: number; arr: any; } = ConvertToMap();
    let key = `${myBagItem.getProduct().id}`;
    myBagItem.selections.forEach(a => 
        key = key + a.items[0].value
    )
    
    var item = map.get(key)

    if (!item)
        item = myBagItem;

    amount = item.getQuantity();
    amount--;
    if (amount <= 0) {
        map.delete(key)
    } else {
        item?.setQuantity(amount);
        map.set(key, item);
    }

    convertFromMapToCacheObj(map, arr);
}

function convertFromMapToCacheObj(map: Map<string, BagItem>, arr: any) {
    map.forEach((v, k) => {
        var arr1: any = [k, v];
        arr.push(arr1);
    });

    localStorage.setItem('products', JSON.stringify(arr));
}

export function getCartItems(): [BagItem] {

    var jsonStr: any = localStorage.getItem('products');
    if (jsonStr == null) {
        jsonStr = JSON.stringify([]);
        localStorage.setItem('products', jsonStr)
    }
    var parsedData = JSON.parse(jsonStr);
    var bag: any = [];

    var myBag: any;
    parsedData.forEach(function (item: any) {
        var value = item[1];
        myBag = new BagItem(value.product, value.quantity, value.selections);
        bag.push(myBag)
    });

    return bag;
}


export function updateItem(myBagItem: BagItem) {
    //DO NOTHING
}


export function getTotal(cur: string): number[] {
    if (cur == '')
        return [0];

    var map: Map<string, BagItem> = new Map([]);
    var jsonStr: any = localStorage.getItem('products');
    var parsedData = JSON.parse(jsonStr);
    var res: number[] = [0];
    res[0] = 0;
    res[1] = 0;

    if (parsedData != null) {
        //convert to Map
        parsedData.forEach(function (item: any) {
            var key = item[0];
            var value = item[1];
            var bagItem = new BagItem(value.product, value.quantity, value.selections);
            map.set(key, bagItem);
            res[1] = res[1] + value.quantity;
        });
    }

    map.forEach((value, key) => {
        const prices: Prices[] = value?.product.prices;
        const quantity: number = value?.getQuantity();
        let price: Prices[] = [];
        price = prices.filter(function (p: any) {
            return p.currency.symbol == cur;
        });

        res[0] = res[0] + price[0].amount * quantity;


    });
    return res;
}

export function initialState(attributes: AttributeSet[]):AttributeSet[]{
    const res = attributes.map((set) => ({
        ...set,
        items: [set.items[0]], // Keep only the first item
      }));
    
    return res;
}


export function getPickedAttributes(attributes: AttributeSet[], name:string, value:string):AttributeSet[]{
    const res = attributes.map((set) => ({
        ...set,
        items: [set.items[0]], // Keep only the first item
      }));
    
    return res;
}





