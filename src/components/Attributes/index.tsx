import React from 'react';
import style from './Attributes.module.scss';

export default class Attributes extends React.Component<any, any>{
    constructor(props:any){
        super(props);
        this.handleClick =  this.handleClick.bind(this);
        this.state= {
            selectedSize: '',
            selectedCapacity: '',
            selectedColor: '',
        }
    }

    handleClick = (type:string, value:string) => {
        switch(type){
            case "selectedSize":
                this.props.selectedSize(value);
                this.setState({selectedSize: value});
                break;
            case "selectedCapacity":
                this.props.selectedCapacity(value);
                this.setState({selectedCapacity: value});
                break;
            case "selectedColor":
                this.props.selectedColor(value);
                this.setState({selectedColor:value});
                break;
        }
 
      };

      componentDidMount(): void {
        setTimeout(() => {
            if(this.props.initAttributes){
                this.setState({
                    selectedSize:this.props.initAttributes[0],
                    selectedCapacity:this.props.initAttributes[1],
                    selectedColor:this.props.initAttributes[2]
                })
            }
          }, 1);
           
      }


   render() {

    
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
   const capacitySet:any = cp[0]?cp[0].items:[];


    
    return(

        <div className={'espec'}>

            <div style={{display:sizes[0]?'block':'none'}}>
                <p className={`${style.espec__title}`} >SIZE:</p>
                <div className={style['espec__container-size']}>
                    {sizes.map((s:any, index:number) => (
                    <div key={index} className={`${style['espec__container-size--content']} ${s.value == this.state.selectedSize?style['selected']:''}`} 
                    onClick={()=> this.handleClick("selectedSize",s.value)}>   
                        <p>{s.value}</p> 
                    </div>       
                    ))}  
                </div>                   
            </div>

            <div style={{display:capacitySet[0]?'block':'none'}} >
                <p className={`${style.espec__title}`} >CAPACITY:</p>
                <div className={style['espec__container-size']}>
                    {capacitySet.map((c:any, index:number) => (
                    <div key={index} className={`${style['espec__container-size--content']} ${c.value == this.state.selectedCapacity?style['selected']:''}`}
                    onClick={()=> this.handleClick("selectedCapacity",c.value)} >   
                        <p>{c.value}</p> 
                    </div>       
                    ))}  
                </div>                   
            </div>

            <div style={{display:colors[0]?'block':'none'}}>
                <p className={`${style.espec__title}`}>COLOR:</p>
                {colors.map((c:any, index:number) => (
                    <div key={index} className={`${style['espec__container-color']} ${c.value==this.state.selectedColor?style['color--selected']:''} `}
                    onClick={()=> this.handleClick("selectedColor",c.value)}>
                        <p style={{backgroundColor:c.value}} className={style['espec__container-color']}></p> 
                    </div>))
                }
            </div>
        </div>
    )  
   }
}

