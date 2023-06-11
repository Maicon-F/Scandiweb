import React from 'react';
import style from './card.module.scss';
import {connect} from 'react-redux';
import { updateCategory } from '../../../adapters/slices/category';
import addToCartIcon from '../../../assets/icons/circle_icon.svg';
import Product from '../../../models/product';
import BagItem from '../../../models/bagItem';
import { addToCart } from '../../../utils/addToCard';

class Card extends React.Component<any,any>{
    constructor(props:any){ 
        super(props);
    }

    componentDidMount(): void {
    }
    

    addToCart(){
        let p:Product = this.props.product;
        let size = p.attributes.filter(e => e.name == "Size");
        let s = size.length > 0? size[0]?.items[0]?.value:"";

        let capacity = p.attributes.filter(e => e.name == "Capacity");
        let cap = capacity.length > 0? capacity[0]?.items[0]?.value:"";

        let color = p.attributes.filter(e => e.name == "Color");
        let col = color.length > 0? color[0]?.items[0]?.value:"";

        var bagItem = new BagItem(p, 0,s, cap, col);
        console.log("BAGITEM", bagItem);
        addToCart(bagItem);
    }

    render(){
        const {currency} =  this.props;
        const { name, id, gallery, prices} = this.props.product; 
        let price = prices.filter(function(p:any){
            return p.currency.symbol == currency;
        })
       
        return(
            <div className={style.card} >  
                    <div className={style.card__imageContainer}>
                       <a href={`/product-description/${id}`}><img src={gallery[0]} alt={name}/></a>
                        <a className={style.addToCartIcon} href={`cart`} onClick={()=>this.addToCart()}><img src={addToCartIcon}/> </a>
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
    })
}

const mapDispatchToProps = (dispatch:any) => ({
    updateCategory: (payload:string) => dispatch(updateCategory(payload)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Card)
