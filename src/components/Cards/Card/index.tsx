import React from 'react';
import itens from '../itens.json';
import style from './card.module.scss';
import {connect} from 'react-redux';
import { increment } from '../../../adapters/slices';

type Props = typeof itens[0];


class Card extends React.Component<any,any>{
    static props: { dispatch: any; };
    constructor(props:any){
        
        super(props);
        
    }
    

    handle(){
        const {dispatch} =this.props
        dispatch(increment())
    }
    
    render(){
        const {teste} = this.props;
        console.log('teste:', teste.counter.value);
        const { title, photo, price} = this.props.product;
        return(
            <div className={style.card}>  
                    <img src={photo} alt={title} className={style.image}/>
                <div className={style.card__details}>
                    <p>{title}</p>
                    <p>$ {price}</p>
                </div>
                <button onClick={()=> this.handle()} >BUTAO TESTE</button>
           </div>
        )
    }
}

export interface CounterState {
    value: number
  }
const mapStateToProps = (e: any) => {
    return ({
        teste: e
    })
}

export default connect(mapStateToProps)(Card)
