import React, { Component } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import style from './header.module.scss';
import bag from "../../assets/icons/logo_transparent.svg"
import arrowUp from "../../assets/icons/up.svg"
import arrowDown from "../../assets/icons/down.svg"
import MiniCart from '../MiniCart/Cart';
import itens from '../../assets/itens.json';
import { connect } from 'react-redux';
import { updateCategory } from '../../adapters/slices/category';
import client from './../../ApoloClient/client';
import { GET_ALL_CATEGORIES, GET_ALL_CURRENCIES } from '../../ApoloClient/graphQl';
import {displayCart} from '../../adapters/slices/displayCart';
import Currency from '../../models/prices';
import { updateCurrency } from '../../adapters/slices/currency';


const currencies = new Currency('','');

class Header extends Component<any, any> {
    constructor(props: any) {
        super(props)
        this.fetchAllCategories = this.fetchAllCategories.bind(this);
        this.fetchAllCurrencies =  this.fetchAllCurrencies.bind(this);
        this.handle = this.handle.bind(this);
        this.handleMiniCart = this.handleMiniCart.bind(this);
        this.state = {
            categories: [{name:'all'}],
            category: "ALL",
            hideCart: true,
            currencies: [currencies],
            currency: '$',
            dispOps: false,
        };
    }

    handle(event: any) {
        const {updateCategory} = this.props
        updateCategory(event.target.innerText);
    }

    componentDidMount() {
        this.fetchAllCategories();
        this.fetchAllCurrencies();
        updateCategory(this.state.category);
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        const { updateCategory, updateCurrency } = this.props;
        if(this.state.currency != this.props.currency)
            updateCurrency(this.state.currency);
      
    }


    async fetchAllCategories() {
        let res = await client.query({
            query: GET_ALL_CATEGORIES,
        });
    
        this.setState({
            categories: [...res.data.categories]
        })
    }

    async fetchAllCurrencies(){
        let res = await client.query({
            query: GET_ALL_CURRENCIES,
        });

        this.setState({
            currencies: [...res.data.currencies]
        });

    }

    handleMiniCart(){
        this.setState({
            hideCart: !this.state.hideCart,
        });    
        const {displayCart} = this.props;
        displayCart(this.state.hideCart)
    }


    render() {
     
        return (

            <div className={style.container}>
                <div className={`${style.container__categories}`}>
                    {this.state.categories.map((c: any) => 
                    <p className={this.props.category.toUpperCase() === c.name.toUpperCase() ? style[`container__categories--active`]: ""} onClick={(e) => this.handle(e)}>{c.name.toUpperCase()}</p>)}
                </div>
                <img src={bag} style={{ maxWidth: '3vw' }}></img>
                <div className={style.container__buttons}> 
                    <div >
                        <label>{this.state.currency}
                            <select className={`${this.state.dispOps ?'':style[`container__buttons--inactive`] }`} multiple={true} value={this.state.currency} onChange={e => this.setState({currency: e.target.value})}>
                            {this.state.currencies.map((c:Currency)=>
                                <option value={c.symbol}>{c.symbol} {c.label}</option>
                            )}  
                            </select>  
                        </label>            
                    </div>
                    <div className={style.miniCartFatlher}> 
                    <img className={`${this.state.dispOps ?style[`container__buttons--inactive`]:'' }`} src={arrowDown} style={{ maxWidth: '1vw', paddingLeft:'6px' }} onClick={() => this.setState({ dispOps:true})} />
                    <img className={`${this.state.dispOps ?'':style[`container__buttons--inactive`] }`} src={arrowUp} style={{ maxWidth: '1vw', paddingLeft:'6px' }} onClick={() => this.setState({ dispOps:false})} />
                        <FiShoppingCart style={{ fontSize: '24px', marginLeft:'20px' }} onClick={()=> this.handleMiniCart()} />
                        <div className={`${style.miniCart} ${this.state.hideCart? style['miniCart--isActive']:''}`}><MiniCart products={itens} /></div>
                    </div>
                </div>
            </div>
        )
    }

}


const mapStateToProps = (state: any) => {
    return ({
        category: state.category,
        currency: state.currency
    })
}

const mapDispatchToProps = (dispatch: any) => ({
    updateCategory: (payload: string) => dispatch(updateCategory(payload)),
    displayCart:(payload: boolean) => dispatch(displayCart(payload)),
    updateCurrency:(payload: string) => dispatch(updateCurrency(payload)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)
