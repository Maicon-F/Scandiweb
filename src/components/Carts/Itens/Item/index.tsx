import React from 'react';
import style from '../Item/item.module.scss';
import ColorSizeSelection from '../../../Attributes';
import { FaPlus, FaMinus } from 'react-icons/fa';
import ProductModel from '../../../../models/product';
import { addToCart, removeFromCart, updateItem } from '../../../../utils/addToCard';
import { connect } from 'react-redux';
import { updateCart } from '../../../../adapters/slices/updateCart';
import BagItem from '../../../../models/bagItem';


class Item extends React.Component<any, any> {
    constructor(props:any){
        super(props);
        this.handleCart = this.handleCart.bind(this);
        this.handleChildSizeData = this.handleChildSizeData.bind(this); 
        this.handleChildCapacityData = this.handleChildCapacityData.bind(this);
        this.handleChildColorData = this.handleChildColorData.bind(this);
        this.state = {
            update: false,
            selectedSize: '',
            selectedCapacity: '',
            selectedColor: '',
        }
    }

    handleCart(action:string){

        switch(action){
            case "add":
                addToCart(this.props.bagItem);
                break;
            case "remove":
                removeFromCart(this.props.bagItem);
                break;   
        }
        
        const {updateCart} = this.props;
        updateCart(!this.props.update)
    }


    handleChildSizeData = (childData:string) => {
        this.setState({ selectedSize: childData });
        let myBagItem:BagItem = this.props.bagItem;
        myBagItem.setSize(childData);
        updateItem(myBagItem);

      };
    
    handleChildCapacityData = (childData:string) => {
        this.setState({ selectedCapacity: childData });
        let myBagItem:BagItem = this.props.bagItem;
        myBagItem.setCapacity(childData);
        updateItem(myBagItem);
      };

    handleChildColorData = (childData:string) => {
        this.setState({ selectedColor: childData });
        let myBagItem:BagItem = this.props.bagItem;
        myBagItem.setColor(childData);
        updateItem(myBagItem);
      };


    render() {
        const { quantity } = this.props;
        const product: ProductModel = this.props.product; 
        const attributes:any = product?product.attributes:[];
        const bagItem:BagItem = this.props.bagItem;
        console.log("BAG",bagItem)

        return (
            <>
                <div className={style.item}>
                    <div className={style.item__content}>      
                        <div><p className={`${style['item__content-title']}`}>{product?.id}</p></div>
                        <div><p className={`${style['item__content-subtitle']}`}>{product?.brand}</p></div>
                        <div><p className={`${style['item__content-price']}`}>${product?.prices[0].amount}</p></div>
                        <ColorSizeSelection attributes={attributes} selectedSize={this.handleChildSizeData} initAttributes={[bagItem.selectedSize, bagItem.selectedCapacity, bagItem.selectedColor]} selectedCapacity={this.handleChildCapacityData} selectedColor={this.handleChildColorData}></ColorSizeSelection>
                    </div>
                    <div className={style['item-image']}>
                        <div className={style['item-image__buttons']}>
                            <button onClick={()=>{this.handleCart("add")} } type="button"><FaPlus/></button>
                            <p>{quantity}</p>
                            <button onClick={()=>{this.handleCart("remove")}}  type="button"><FaMinus/></button>
                        </div>
                        <img src={product?.gallery[0]} className={style["item-image__button item-image__button--add"]} ></img>
                    </div>
                </div>
                <hr></hr>
            </>
        )
    }
}



const mapStateToProps = (e: any) => {
    return ({
        currency: e.currency,
        update: e.updateCart
    })
}

const mapDispatchToProps = (dispatch:any) => ({
    updateCart: (payload:boolean) => dispatch(updateCart(payload)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Item)