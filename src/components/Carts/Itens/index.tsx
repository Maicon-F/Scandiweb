import React from 'react';
import prods from '../../../assets/itens.json';
import style from './itens.module.scss';
import Item from '../Itens/Item/index';


//type Props = typeof itens[0];
export type Props = { products: typeof prods };

export default class Itens extends React.Component<Props> {

    render(){
        const {products} = this.props;
        return(
            
            <div className={style.item}>
                <hr></hr>
                {products.map((p, index)=>(
                    <Item product={p} />
                ))}
            </div>
        )
    }
}