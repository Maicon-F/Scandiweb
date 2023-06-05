import React from 'react';
import prods from '../../../assets/itens.json';
import style from './itens.module.scss';
import Item from '../Itens/Item/index';


//type Props = typeof itens[0];
const prod = prods[1]
export type Props = { products: typeof prods };

export default class Itens extends React.Component<Props> {

    render(){
        const {products} = this.props;
        return(
            
            <div className={style.item}>
                {products.map((p, index)=>(
                    <Item key={p.id} product={p} />
                ))}
            </div>
        )
    }
}