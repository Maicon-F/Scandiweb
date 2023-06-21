import React from 'react';
import itens from '../../assets/itens.json';
import CartComponent from "../../components/Carts/Cart";
import Header from "../../components/header";
import Title from '../../components/Title';
import { connect } from 'react-redux';
import style from './cart.module.scss';


interface TitleData {
    name: string,
    styles: {
    fontSize: string,
    fontWeight: string
    }
  }

class Cart extends React.Component<any,any>{

    render() {   
        const myTitle: TitleData = { name: "CART", styles:{fontSize: "42px", fontWeight:'bold'}};
        const {displayCart} = this.props;
        
        return(
            <div >
                <div style={{zIndex:'100', position:'relative'}}>
                    <Header />
                </div>
                <div style={{position:'relative'}}>
                    <Title TitleData={myTitle}></Title>
                    <CartComponent/>
                    <div  className={displayCart?style['overlay']:''}></div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (e: any) => {
    return ({
        displayCart: e.displayCart
    })
}



export default connect(mapStateToProps)(Cart)