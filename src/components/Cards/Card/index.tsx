import React from 'react';
import style from './card.module.scss';
import {connect} from 'react-redux';
import { updateCategory } from '../../../adapters/slices/category';
import addToCartIcon from '../../../assets/icons/circle_icon.svg';

class Card extends React.Component<any,any>{
    constructor(props:any){ 
        super(props);
    }

    componentDidMount(): void {
        
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
                        <img src={gallery[0]} alt={name}/>
                        <a className={style.addToCartIcon} href="/pd" ><img src={addToCartIcon}/> </a>
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

export default connect(mapStateToProps)(Card)
