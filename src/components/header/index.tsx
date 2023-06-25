import React, { Component } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import style from './header.module.scss';
import bag from "../../assets/icons/logo_transparent.svg"
import arrowUp from "../../assets/icons/up.svg"
import arrowDown from "../../assets/icons/down.svg"
import MiniCart from '../Carts/mini';
import { connect } from 'react-redux';
import { updateCategory } from '../../adapters/slices/category';
import client from './../../ApoloClient/client';
import { GET_ALL_CATEGORIES, GET_ALL_CURRENCIES } from '../../ApoloClient/graphQl';
import {displayCart} from '../../adapters/slices/displayCart';
import Currency from '../../models/currency';
import { updateCurrency } from '../../adapters/slices/currency';
import { getTotal } from '../../utils/addToCard';


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
            quantity: 0,
        };
    }

    handleChildVariable = () => {
        const res= getTotal(this.state.currency);
        this.setState({ quantity: res[1] });
      };

    handle(event: any) {
        let currentPath = window.location.href.split('/')[3];
        var category = event.target.innerText;
        
        if(currentPath != "home")
        window.location.href = "/home";

        const {updateCategory} = this.props
        updateCategory(category);
 
           
    }

    componentDidMount() {
        this.fetchAllCategories();
        this.fetchAllCurrencies();
        updateCategory(this.state.category);
        this.handleChildVariable();
        document.addEventListener('click', this.handleClick);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick);
      }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        const { updateCurrency } = this.props;
        if(this.state.currency != this.props.currency)
            updateCurrency(this.state.currency);
        
        if(prevProps.updateCart != this.props.updateCart)
            this.handleChildVariable();
                   
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

    handleClick = (event: MouseEvent) => {
        const { displayCart } = this.props;
        const element = document.getElementById('element');
    
        if (element && !element.contains(event.target as Node)) {
            this.setState({ hideCart: true });
            displayCart(false);
        }
      };
  


    render() {
        return (

            <div className={style.container}> 
                <div className={`${style.container__categories}`}>
                    {this.state.categories.map((c: any) => 
                    <p className={this.props.category.toUpperCase() === c.name.toUpperCase() ? style[`container__categories--active`]: ""} onClick={(e) => this.handle(e)}>{c.name.toUpperCase()}</p>)}
                </div>
                <a href={"/cart"}><img src={bag} style={{ maxWidth: '3vw' }}></img></a>
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
                  
                <img className={`${this.state.dispOps ?style[`container__buttons--inactive`]:'' }`} src={arrowDown} style={{ maxWidth: '1vw', paddingLeft:'6px' }} onClick={() => this.setState({ dispOps:true})} />
                <img className={`${this.state.dispOps ?'':style[`container__buttons--inactive`] }`} src={arrowUp} style={{ maxWidth: '1vw', paddingLeft:'6px' }} onClick={() => this.setState({ dispOps:false})} />
                
                     
                <div id="element" className={style.miniCartFatlher}>        
                    <FiShoppingCart style={{ fontSize: '24px', marginLeft:'20px', position:'relative' }} onClick={()=> this.handleMiniCart()} />
                    <span className={style.counter}>{this.state.quantity}</span>
                    <div className={`${style.miniCart} ${this.state.hideCart? style['miniCart--isActive']:''}`}><MiniCart  /></div>
                </div>

                </div>
            </div>
        )
    }

}


const mapStateToProps = (e: any) => {
    return ({
        category: e.category,
        currency: e.currency,
        updateCart: e.updateCart,
        update: e.updateCart
    })
}

const mapDispatchToProps = (dispatch: any) => ({
    updateCategory: (payload: string) => dispatch(updateCategory(payload)),
    displayCart:(payload: boolean) => dispatch(displayCart(payload)),
    updateCurrency:(payload: string) => dispatch(updateCurrency(payload)),    
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)
