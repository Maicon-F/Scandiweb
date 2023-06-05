import BagItem from '../models/bagItem';

export function addToCart(myBagItem: BagItem){

        var map:Map<string, BagItem> = new Map([]);
        var jsonStr:any = localStorage.getItem('products');
        var parsedData = JSON.parse(jsonStr);
        var amount:number = 0;
        var arr:any=[];
        
    
        if(parsedData !=null){
            //convert to Map
            parsedData.forEach(function(item:any) {
                var key = item[0];
                var value = item[1];
                var bagItem = new BagItem(value.product, value.quantity, value.selectedSize, value.selectedCapacity, value.selectedColor);
                map.set(key, bagItem);
              });
            } 
            
            var item = map.get(myBagItem.getProduct().id);
    
            if(!item)
                item = myBagItem;
          
            amount = item.getQuantity();
            amount++;
            item?.setQuantity(amount);
            map.set(item.getProduct().id, item);
    
            //convert from Map back to array
            map.forEach( (v,k)=>{
                var arr1:any = [k,v]
                arr.push(arr1)
            })
     
            localStorage.setItem('products', JSON.stringify(arr));             
}


export function removeFromCart(myBagItem:BagItem){
    var map:Map<string, BagItem> = new Map([]);
    var jsonStr:any = localStorage.getItem('products');
    var parsedData = JSON.parse(jsonStr);
    var amount:number = 0;
    var arr:any=[];
    

    if(parsedData !=null){
        //convert to Map
        parsedData.forEach(function(item:any) {
            var key = item[0];
            var value = item[1];
            var bagItem = new BagItem(value.product, value.quantity, value.selectedSize, value.selectedCapacity, value.selectedColor);
            map.set(key, bagItem);
          });
        } 
                 
        var item = map.get(myBagItem.getProduct().id)

        if(!item)
            item =myBagItem;
      
        amount = item.getQuantity();
        amount--;
        if(amount <= 0){
            map.delete(item.getProduct().id)
        }else{
            item?.setQuantity(amount);
            map.set(item.getProduct().id, item);
        }
        

        //convert from Map back to array
        map.forEach( (v,k)=>{
            var arr1:any = [k,v]
            arr.push(arr1)
        })
 
        localStorage.setItem('products', JSON.stringify(arr));  

}

export function getCartItems():[BagItem]{
    var jsonStr:any = localStorage.getItem('products');
    var parsedData = JSON.parse(jsonStr);
    var bag: any = [];

        var myBag:any;
        parsedData.forEach(function(item:any) {
            var value = item[1];
            myBag = new BagItem(value.product, value.quantity, value.selectedSize, value.selectedCapacity, value.selectedColor);
            bag.push(myBag)
          });
    
    return bag;
}


export function updateItem(myBagItem: BagItem){
    var map:Map<string, BagItem> = new Map([]);
    var jsonStr:any = localStorage.getItem('products');
    var parsedData = JSON.parse(jsonStr);
    var arr:any=[];
    

    if(parsedData !=null){
        //convert to Map
        parsedData.forEach(function(item:any) {
            var key = item[0];
            var value = item[1];
            var bagItem = new BagItem(value.product, value.quantity, value.selectedSize, value.selectedCapacity, value.selectedColor);
            map.set(key, bagItem);
          });
        } 
        
        var item = myBagItem;
        map.set(item.getProduct().id, item);
    
        //convert from Map back to array
        map.forEach( (v,k)=>{
            var arr1:any = [k,v]
            arr.push(arr1)
        })
 
        localStorage.setItem('products', JSON.stringify(arr));    
}