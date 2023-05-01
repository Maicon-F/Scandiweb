import React from 'react';
import itens from '../../assets/itens.json';
import Product from '../Cards/Card/index';
import style from './cards.module.scss';
import client from './../../ApoloClient/client';
import { GET_ALL_CATEGORIES } from '../../ApoloClient/graphQl';


type Props = typeof itens[0];


export default class Cards extends React.Component{

  async fetchAllProducts(){
    const cu = await client.query({
      query: GET_ALL_CATEGORIES,
    });
    console.log("Testing api consumption!:", cu)
  }

  componentDidMount(): void {
    this.fetchAllProducts();
  }

   render() {
    return(
        <div className={style.container} >
            {itens.map(item=>(
              <Product key={item.id} product={item}/>
            ))}
        </div>
    )  
   }
}

