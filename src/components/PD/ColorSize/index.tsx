import React from 'react';
import style from './ColorSizeSelection.module.scss';
import itens from '../../../assets/itens.json';


type Props = typeof itens[2];
export default class colorSizeSelection extends React.Component{
   render() {
    const availableColors = itens[2].availableColors;
    const availableSizes = ['XS', 'S', 'M', 'L'];

    return(
        <div className={'espec'}>
            <div className={style['espec__container-size']}>
                <p className={`inner-shadow ${style.espec__title}`} >SIZE:</p>
                {availableSizes.map(s => (
                        <p className={style['espec__container-size--content']}>{s}</p> 
                ))}   
            </div>

            <div>
                <p className={`inner-shadow ${style.espec__title}`}>COLOR:</p>
                {availableColors.map(c => (
                    <div className={style['espec__container-color']}>
                        <p style={{backgroundColor:c}} className={style['espec__container-color']}></p> 
                    </div>))
                }
            </div>
        </div>
    )  
   }
}

