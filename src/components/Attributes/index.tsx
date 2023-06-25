import React from 'react';
import style from './Attributes.module.scss';
import AttributeSet from '../../models/attributeSet';
import { initialState } from '../../utils/addToCard';
import Items from '../../models/Items';

export default class Attributes extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            selectedSize: '',
            selectedCapacity: '',
            selectedColor: '',
            initialAttributes:[],
            selections:[]
        }
    }

    handleClick = (type: string, name:string, item:Items) => {
        // switch (type) {
        //     case "selectedSize":
        //         this.props.selectedSize(value);
        //         this.setState({ selectedSize: value });
        //         break;
        //     case "selectedCapacity":
        //         this.props.selectedCapacity(value);
        //         this.setState({ selectedCapacity: value });
        //         break;
        //     case "selectedColor":
        //         this.props.selectedColor(value);
        //         this.setState({ selectedColor: value });
        //         break;
        // }

        //get attribute
        // let sets: AttributeSet[] = this.props.attributes;
        // let set:AttributeSet = sets?.filter(set => set.name === name)[0]!;
        // let item:Items = set?.items.find(item => item.value ===value)!;
        // set.items = [item];

        //get the current selections
        let sets:AttributeSet[] = this.state.selections;
        
        
        if(sets){
            let setItem = sets.filter(e=> e.name === name)[0]?.items?.find(i=> i.value ===item.value);
            setItem = item;

           let set:AttributeSet = sets.filter(e=> e.name === name)[0];
            set.items = [item];
    
            this.props.sets(sets);
            console.log("SET", sets)
            this.setState({
                selections: sets,
            })
        }

    };

    handleResponse = (name:string, value:string) => {}

    // handleInitialAttributes() {
    //     if (this.props.initAttributes) {
    //         this.setState({
    //             selectedSize: this.props.initAttributes[0],
    //             selectedCapacity: this.props.initAttributes[1],
    //             selectedColor: this.props.initAttributes[2]
    //         })
    //     }
    // }

    handleInitialState(){
        let init: AttributeSet [] = this.props.bagSelections;
        console.log("atr ", init);
        if(!init){
            let attributes: AttributeSet[] = this.props.attributes;
            init = initialState(attributes);
        }
        
        this.setState({
            selections:  init,
        })
       
    }

    handleInitialSelection(name: string, value: string) :boolean{        
        return this.getChosenAttributes(name, value)
    }

    getChosenAttributes(name: string, value: string): boolean{
         let result = false;
         let selection:AttributeSet[] = this.state.selections;
         console.log("selection ", selection);
         if(selection){
            const setArr = selection?.filter((e)=> e.name === name);
            const selectedValue = setArr[0]?.items[0].value;
            result = selectedValue === value? true:false;   

         }
         
        return result;
    }

    handleSelection(name:string, value:string){
        let attributes: AttributeSet[] = this.props.attributes;
        
        if(attributes){
            const setArr = attributes?.filter((e)=> e.name === name);
            
            const selectedValue = setArr[0]?.items[0].value;
            //result = selectedValue === value? true:false;       
         }

    }

    componentDidMount(): void {
        this.handleInitialState();

    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        if (prevProps.attributes !== this.props.attributes && typeof this.props.attributes !== undefined){
            this.handleInitialState();
            console.log("TESTE2222")
        }
            
          
    }


    render() {
        const { attributes, isMiniCart } = this.props;
        const selectedClass = isMiniCart ? style.secundary : style.primary;

        // const s: any = attributes.filter((e: any) =>
        //     e.name == "Size"
        // );
        // const sizes: any = s[0] ? s[0].items : []

        // const c: any = attributes.filter((e: any) =>
        //     e.name == "Color"
        // );
        // const colors: any = c[0] ? c[0].items : [];

        // const cp: any = attributes.filter((e: any) =>
        //     e.name == "Capacity"
        // );
        // const capacitySet: any = cp[0] ? cp[0].items : [];


        //swatch or text




        return (
            <>
                <div className={selectedClass}>
                    <div>
                        {attributes.map((set: AttributeSet, index: number) => {
                            if (set.type === 'text') {
                                return (
                                    <div >
                                        <p className={style.title} >{isMiniCart ? set.name : set.name.toUpperCase()}:</p>
                                        <div className={style['container-size']}>
                                            {set.items.map((s: any, index: number) => (
                                                <div key={index} className={`${style['container-size--content']} ${this.handleInitialSelection(set.name,s.value) ? style['selected'] : ''}`}
                                                    onClick={() => this.handleClick("selectedSize", set.name, s)}>
                                                    <p>{s.value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );

                            } else if (set.type === 'swatch') {
                                return (
                                    <div>
                                        <p className={`${style.title}`}>{isMiniCart ? set.name : set.name.toUpperCase()}:</p>
                                        {set.items.map((c: any, index: number) => (
                                            <div key={index} className={`${style['container-color']} ${this.handleInitialSelection(set.name,c.value) ? style['color--selected'] : ''} `}
                                                onClick={() => this.handleClick("selectedColor", set.name, c)}>
                                                <p style={{ backgroundColor: c.value }} className={style['container-color']}></p>
                                            </div>))
                                        }
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>

                {/* <div className={selectedClass}>
                    <div style={{ display: sizes[0] ? 'block' : 'none' }}>
                        <p className={style.title} >{isMiniCart ? s[0]?.name : s[0]?.name.toUpperCase()}:</p>
                        <div className={style['container-size']}>
                            {sizes.map((s: any, index: number) => (
                                <div key={index} className={`${style['container-size--content']} ${s.value == this.state.selectedSize ? style['selected'] : ''}`}
                                    onClick={() => this.handleClick("selectedSize", s.value)}>
                                    <p>{s.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: capacitySet[0] ? 'block' : 'none' }} >
                        <p className={`${style.title}`} >{isMiniCart ? cp[0]?.name : cp[0]?.name.toUpperCase()}:</p>
                        <div className={style['container-size']}>
                            {capacitySet.map((c: any, index: number) => (
                                <div key={index} className={`${style['container-size--content']} ${c.value == this.state.selectedCapacity ? style['selected'] : ''}`}
                                    onClick={() => this.handleClick("selectedCapacity", c.value)} >
                                    <p>{c.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: colors[0] ? 'block' : 'none' }}>
                        <p className={`${style.title}`}>{isMiniCart ? c[0]?.name : c[0]?.name.toUpperCase()}:</p>
                        {colors.map((c: any, index: number) => (
                            <div key={index} className={`${style['container-color']} ${c.value == this.state.selectedColor ? style['color--selected'] : ''} `}
                                onClick={() => this.handleClick("selectedColor", c.value)}>
                                <p style={{ backgroundColor: c.value }} className={style['container-color']}></p>
                            </div>))
                        }
                    </div>
                </div> */}
            </>
        )
    }
}

