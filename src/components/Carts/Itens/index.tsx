import React from 'react';
import prods from '../../../assets/itens.json';
import style from './itens.module.scss';
import Item from '../Itens/Item/index';
import Bag from '../../../models/bagItem'
import { connect } from 'react-redux';
import { getCartItems, getTotal } from '../../../utils/addToCard';
import { updateCart } from '../../../adapters/slices/updateCart';

//type Props = typeof itens[0];
export type Props = { products: typeof prods };


class Itens extends React.Component<any, any> {
    constructor(props:any){
        super(props);
       this.getProducts = this.getProducts.bind(this);
       this.getTotal =  this.getTotal.bind(this);
       this.state = {
        products: [Bag],
        total: 0,
        quantity: 0,
       }
    }

    componentDidMount(): void {
        this.getProducts();
        this.getTotal();
        
    }
  
    getProducts(){
        var bag: [Bag] = getCartItems();
        this.setState({
            products: [...bag]
        }) 

    }

    getTotal(){
        var res = getTotal(this.props.currency);
        this.setState({
            total: res[0],
            quantity: res[1],
        })
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        if(prevProps.update != this.props.update)
            this.getProducts();  
        
        if(prevProps.update != this.props.update || prevProps.currency != this.props.currency)
            this.getTotal();
    }


    render(){    
        const {isMiniCart} = this.props;
        const miniCartDisplayStyle = {
            display: isMiniCart? '' : 'none'
          };
          const cartDisplayStyle = {
            display: isMiniCart? 'none' : ''
          };
      

        return(
            
            <div>
                <p style={{...miniCartDisplayStyle, marginTop:'40px',fontFamily:' var(--ral)' }}><b>My Bag.</b> {this.state.quantity} items</p>
                <hr></hr>
                {this.state.products.map((b:Bag, index:number)=>(
                    <Item bagItem={b} product={b.product} quantity={b.quantity} key={index} isMiniCart={isMiniCart}/>
                ))}
              
                <div style={cartDisplayStyle}>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Tax 21%:</td>
                                <td className={style.value}>{this.props.currency}{(this.state.total*.21).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Quantity:</td>
                                <td className={style.value}>{this.state.quantity}</td>
                            </tr>
                            <tr>
                                <td className={style.total}>Total</td>
                                <td className={style.value}>{this.props.currency}{(this.state.total).toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                    <a ><button className={style.checkoutButtons} style={{width:'25vw', margin:'20px 0px'}}>ORDER</button></a> 
                </div>
                
                <div style={miniCartDisplayStyle}>
                    <div style={{display:'flex', justifyContent:'space-between', fontSize:'16px', margin:'0px 10px'}}>
                        <p style={{fontWeight:'500', fontFamily:'var(--rob)'}}>Total</p>
                        <p style={{fontWeight:'bold'}}>{this.props.currency}{(this.state.total).toFixed(2)}</p>
                    </div>
                    <div className={style['miniCart--buttons']}>
                        <a ><button className={style.checkoutButtons} style={{backgroundColor:'white', color:'black', border:'1.5px solid black', width:"12vw"}}> View Bag</button></a>
                        <a ><button className={style.checkoutButtons} style={{width:'12vw'}}>Checkout</button></a>
                    </div> 
                </div>   
               
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