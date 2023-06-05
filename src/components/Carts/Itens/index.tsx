import React from 'react';
import prods from '../../../assets/itens.json';
import style from './itens.module.scss';
import Item from '../Itens/Item/index';
import Bag from '../../../models/bagItem'
import { connect } from 'react-redux';
import { getCartItems } from '../../../utils/addToCard';
import { updateCart } from '../../../adapters/slices/updateCart';

//type Props = typeof itens[0];
export type Props = { products: typeof prods };


class Itens extends React.Component<any, any> {
    constructor(props:any){
        super(props);
       this.getProducts = this.getProducts.bind(this);
       this.state = {
        products: [Bag],

       }
    }

    componentDidMount(): void {
        this.getProducts();
    }
  
    getProducts(){
        var bag: [Bag] = getCartItems();
        this.setState({
            products: [...bag]
        }) 
    }


    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        if(prevProps.update != this.props.update)
            this.getProducts();  
    }


    render(){    

        return(
            <div className={style.item}>
                <hr></hr>
                {this.state.products.map((b:Bag, index:number)=>(
                    <Item bagItem={b} product={b.product} quantity={b.quantity} key={index}  />
                ))}
            </div>
        )
    }
}


const mapStateToProps = (e: any) => {
    return ({
        update: e.updateCart,
        currency: e.currency,
    })
}

const mapDispatchToProps = (dispatch:any) => ({
    updateCart: (payload:boolean) => dispatch(updateCart(payload)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Itens)