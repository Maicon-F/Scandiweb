import React from 'react';
import style from './Attributes.module.scss';
import itens from '../../assets/itens.json';


type Props = typeof itens[2];
export default class Attributes extends React.Component<any, any>{
    constructor(props:any){
        super(props);
    }

   render() {
    const availableColors = itens[2].availableColors;
    const availableSizes = ['XS', 'S', 'M', 'L'];
    const capacities = ['41', '42', '43', '44'];
    
    const {attributes} = this.props;
    
    const s:any = attributes.filter((e:any)=>
    e.name == "Size"
    );
    const sizes:any = s[0]?s[0].items:[]

    const c:any = attributes.filter((e:any)=>
        e.name == "Color"
    );
   const colors:any = c[0]?c[0].items:[];
   
   const cp:any = attributes.filter((e:any)=>
        e.name == "Capacity"
    );
   const capacitySet:any = cp[0]?cp[0].items:[]
    
    return(

        <div className={'espec'}>

            <div style={{display:sizes[0]?'block':'none'}}>
                <p className={`${style.espec__title}`} >SIZE:</p>
                <div className={style['espec__container-size']}>
                    {sizes.map((s:any, index:number) => (
                    <div key={index} className={style['espec__container-size--content']} >   
                        <p>{s.value}</p> 
                    </div>       
                    ))}  
                </div>                   
            </div>

            <div style={{display:capacitySet[0]?'block':'none'}} >
                <p className={`${style.espec__title}`} >CAPACITY:</p>
                <div className={style['espec__container-size']}>
                    {capacitySet.map((c:any, index:number) => (
                    <div key={index} className={style['espec__container-size--content']} >   
                        <p>{c.value}</p> 
                    </div>       
                    ))}  
                </div>                   
            </div>

            <div style={{display:colors[0]?'block':'none'}}>
                <p className={`${style.espec__title}`}>COLOR:</p>
                {colors.map((c:any, index:number) => (
                    <div key={index} className={style['espec__container-color']}>
                        <p style={{backgroundColor:c.value}} className={style['espec__container-color']}></p> 
                    </div>))
                }
            </div>
        </div>
    )  
   }
}

