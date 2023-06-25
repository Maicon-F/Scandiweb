import React from 'react';
import style from '../Item/item.module.scss';
import Attributes from '../../../Attributes';
import { FaPlus, FaMinus } from 'react-icons/fa';
import ProductModel from '../../../../models/product';
import { addToCart, removeFromCart, updateItem } from '../../../../utils/addToCard';
import { connect } from 'react-redux';
import { updateCart } from '../../../../adapters/slices/updateCart';
import BagItem from '../../../../models/bagItem';
import Prices from '../../../../models/prices';
import plus from '../../../../assets/icons/plus-square.svg';
import minus from '../../../../assets/icons/minus-square.svg';
import Carousel from '../../../Slider';


class Item extends React.Component<any, any> {
    constructor(props:any){
        super(props);
        this.handleCart = this.handleCart.bind(this);
        // this.handleChildSizeData = this.handleChildSizeData.bind(this); 
        // this.handleChildCapacityData = this.handleChildCapacityData.bind(this);
        // this.handleChildColorData = this.handleChildColorData.bind(this);
        this.state = {
            update: false,
            selectedSize: '',
            selectedCapacity: '',
            selectedColor: '',
            amount : 0,
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


    // handleChildSizeData = (childData:string) => {
    //     this.setState({ selectedSize: childData });
    //     let myBagItem:BagItem = this.props.bagItem;
    //     myBagItem.setSize(childData);
    //     updateItem(myBagItem);

    //   };
    
    // handleChildCapacityData = (childData:string) => {
    //     this.setState({ selectedCapacity: childData });
    //     let myBagItem:BagItem = this.props.bagItem;
    //     myBagItem.setCapacity(childData);
    //     updateItem(myBagItem);
    //   };

    // handleChildColorData = (childData:string) => {
    //     this.setState({ selectedColor: childData });
    //     let myBagItem:BagItem = this.props.bagItem;
    //     myBagItem.setColor(childData);
    //     updateItem(myBagItem);
    //   };

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {

        if(prevProps.currency != this.props.currency){
        const product: ProductModel = this.props.product;
        const prices:Prices[] = product?.prices;
        let currency = this.props.currency;
        let price:Prices[] = [];
    
        if(prices && typeof prices == "object" && currency !=""){        
            price = prices.filter(function(p:any){
                return p.currency.symbol == currency;
            });
            this.setState({
                amount: price[0].amount
            }) 
        }
    }
    }
    

    render() {
        let { quantity, currency, isMiniCart } = this.props;
        const primaryClass = style.primary;
        const secondaryClass = style.secondary;
        const selectedClass = isMiniCart? secondaryClass : primaryClass;

        const product: ProductModel = this.props.product; 
        const attributes:any = product?product.attributes:[];
        const bagItem:BagItem = this.props.bagItem;
        
             
        return (
            <>
                <div className={selectedClass}>
                    <div className={style.content}>      
                        <div><p className={`${style['content-title']}`}>{product?.id}</p></div>
                        <div><p className={`${style['content-subtitle']}`}>{product?.brand}</p></div>
                        <div><p className={`${style['content-price']}`}>{currency}{this.state.amount}</p></div>
                        <Attributes attributes={attributes} isMiniCart={isMiniCart} bagSelections={bagItem.selections}></Attributes>
                    </div>
                    <div className={style['image']}>
                        <div className={style['image__buttons']}>
                            <img src={plus} alt="Button" onClick={()=>{this.handleCart("add")} } />   
                            <p>{quantity}</p>
                            <img src={minus} onClick={()=>{this.handleCart("remove")}}  />
                        </div>
                        <div  className={style["image__slider"]} >
                            <Carousel images={product?.gallery} slidesPerView={1} ></Carousel>
                        </div>
    
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