import React from 'react';
import itens from '../../../../assets/itens.json';
import style from '../cart.module.scss';
import Item from '../Itens/Item/index';


//type Props = typeof itens[0];
const it = itens[1]
export type Props = { products: typeof it[] };

export default class Itens extends React.Component<Props> {

    render(){
        const {products} = this.props;
        return(
            
            <div className={style.item}>
                {products.map((prod, index)=>(
                    <Item product={prod} />
                ))}
            </div>
        )
    }
}