import React from 'react';
import style from './ColorSizeSelection.module.scss';
import itens from '../../assets/itens.json';


type Props = typeof itens[2];
export default class colorSizeSelection extends React.Component{
   render() {
    const availableColors = itens[2].availableColors;
    const availableSizes = ['XS', 'S', 'M', 'L'];

    return(
        <div className={'espec'}>
            <div >
                <p className={`${style.espec__title}`} >SIZE:</p>
                <div className={style['espec__container-size']}>
                    {availableSizes.map(s => (
                    <div  className={style['espec__container-size--content']} >   
                        <p>{s}</p> 
                    </div>       
                    ))}  
                </div>                   
            </div>


            <div>
                <p className={`${style.espec__title}`}>COLOR:</p>
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

