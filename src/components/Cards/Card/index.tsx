import React from 'react';
import style from './card.module.scss';
import {connect} from 'react-redux';
import { updateCategory } from '../../../adapters/slices/category';
import Product from '../../../models/product';
import BagItem from '../../../models/bagItem';
import { addToCart, initialState } from '../../../utils/addToCard';
import { updateCart } from '../../../adapters/slices/updateCart';
import { FiShoppingCart } from 'react-icons/fi';

class Card extends React.Component<any,any>{
    constructor(props:any){ 
        super(props);
        this.state = {
            isRotating: false,
        }
    }

    componentDidMount(): void {
    }
    

    addToCart(){
        let p:Product = this.props.product;
        var bagItem = new BagItem(p, 0, initialState(this.props.product.attributes));
        
        addToCart(bagItem);

        const {updateCart} = this.props;
        updateCart(!this.props.update);
        this.handleIconRotation();
      
    }

    
  handleIconRotation = () => {
    this.setState({ isRotating: true });
    setTimeout(() => {
      this.setState({ isRotating: false });
    }, 700); 
  };

    render(){
        const {currency} =  this.props;
        const { name, id, gallery, prices, inStock} = this.props.product; 
    
        let price = prices.filter(function(p:any){
            return p.currency.symbol == currency;
        })

       
        return(
            <div className={inStock?style.card:style.outOfStock} >  
                    <div className={style.card__imageContainer}>
                       <a href={`/product-description/${id}`}><img src={gallery[0]} alt={name}/></a>
                       <p className={style['outOfStock-content']} style={{display:inStock?'none':''}} >Out Of Stock</p>
                        <div className={style.addToCartIcon} style={{display:inStock?'':'none', backgroundColor:'var(--lemon)', borderRadius:'50%', width:'3vw', height:'3vw'}} onClick={()=>this.addToCart()}><FiShoppingCart className={this.state.isRotating?style.bounce:style.noBounce}/></div>
                    </div>
                <div className={style.card__details}>
                    <p>{name}</p>
                    <p>{currency} {price[0].amount}</p>
                </div>
           </div>
        )
    }
}


const mapStateToProps = (e: any) => {
    return ({
        category: e.category,
        currency: e.currency,
        update: e.updateCart,
    })
}

const mapDispatchToProps = (dispatch:any) => ({
    updateCategory: (payload:string) => dispatch(updateCategory(payload)),
    updateCart: (payload:boolean) => dispatch(updateCart(payload)),
    
  });

export default connect(mapStateToProps, mapDispatchToProps)(Card)


