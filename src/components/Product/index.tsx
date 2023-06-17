import React, { createRef } from 'react';
import Attributes from '../Attributes/index';
import style from '../Product/product.module.scss';
import { connect } from 'react-redux';
import ProductModel from '../../models/product';
import BagItem from '../../models/bagItem';
import { addToCart } from '../../utils/addToCard';



class Product extends React.Component<any, any>{
    private htmlRef = createRef<HTMLDivElement>();

    constructor(props:any){
        super(props);
        this.AddToCart = this.AddToCart.bind(this);
        this.handleChildSizeData = this.handleChildSizeData.bind(this); 
        this.handleChildCapacityData = this.handleChildCapacityData.bind(this);
        this.handleChildColorData = this.handleChildColorData.bind(this);
        this.state = {
            selectedSize:'',
            selectedCapacity:'',
            selectedColor:'',
        }
    }

    handleChildSizeData = (childData:string) => {
        this.setState({ selectedSize: childData });
      };
    
    handleChildCapacityData = (childData:string) => {
        this.setState({ selectedCapacity: childData });
      };

    handleChildColorData = (childData:string) => {
        this.setState({ selectedColor: childData });
      };

    AddToCart(product: ProductModel){   
      let bagItem = new BagItem(product, 0, this.state.selectedSize, this.state.selectedCapacity, this.state.selectedColor);
      addToCart(bagItem); 
    }
    
    
   render() {
    const {prod } = this.props;
    const attributes:any = prod?prod.attributes:[];
    const {currency} =  this.props;
    
    if (this.htmlRef.current) {
        this.htmlRef.current.innerHTML = prod?.description;
      }

    const price = prod?.prices.filter(function(p:any){
        return p.currency.symbol == currency;
    });
    
    const p = price? price[0].amount:22
    return(
        <div className={style['pd']} >

            <div className={style['pd-details']}>
                <p className={style['pd-details__title']}>{prod?.brand}</p>
                <p className={style['pd-details__subtitle']}>{prod?.name}</p>
                <Attributes attributes={attributes} selectedSize={this.handleChildSizeData} selectedCapacity={this.handleChildCapacityData} selectedColor={this.handleChildColorData}></Attributes>
                <p className={`${style['pd-details__price-label']}`}>PRICE:</p>
                <p className={`${style['pd-details__price']}`}>${p}</p>
                <a href={`/cart`}><button onClick={()=>this.AddToCart(prod)}>ADD TO CART</button></a>
                <p className={`${style['pd-details__description']}`} ref={this.htmlRef}></p>
            </div>
        </div>
    )  
   }
}



const mapStateToProps = (e: any) => {
    return ({
        currency: e.currency,
    })
}


export default connect(mapStateToProps)(Product)


