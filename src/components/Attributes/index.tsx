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
            initialAttributes: [],
            selections: []
        }
    }

    handleClick = (name: string, item: Items) => {
        let sets: AttributeSet[] = this.state.selections;


        if (sets) {
            let setItem = sets.filter(e => e.name === name)[0]?.items?.find(i => i.value === item.value);
            setItem = item;

            let set: AttributeSet = sets.filter(e => e.name === name)[0];
            set.items = [item];

            this.props.sets(sets);
            this.setState({
                selections: sets,
            })
        }

    };

    handleResponse = (name: string, value: string) => { }

    handleInitialState() {
        let init: AttributeSet[] = this.props.bagSelections;

        if (!init) {
            let attributes: AttributeSet[] = this.props.attributes;
            init = initialState(attributes);
        }

        this.setState({
            selections: init,
        })

    }

    handleInitialSelection(name: string, value: string): boolean {
        return this.getChosenAttributes(name, value)
    }

    getChosenAttributes(name: string, value: string): boolean {
        let result = false;
        let selection: AttributeSet[] = this.state.selections;

        if (selection) {
            const setArr = selection?.filter((e) => e.name === name);
            const selectedValue = setArr[0]?.items[0].value;
            result = selectedValue === value ? true : false;

        }

        return result;
    }

    componentDidMount(): void {
        this.handleInitialState();

    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        if (prevProps.attributes !== this.props.attributes && typeof this.props.attributes !== undefined)
            this.handleInitialState();
    }


    render() {
        const { attributes, isMiniCart } = this.props;
        const selectedClass = isMiniCart ? style.secundary : style.primary;

        return (
            <>
                <div className={selectedClass}>
                    <div>
                        {attributes.map((set: AttributeSet, index: number) => {
                            if (set.type === 'text') {
                                return (
                                    <div key={index} >
                                        <p className={style.title} >{isMiniCart ? set.name : set.name.toUpperCase()}:</p>
                                        <div className={style['container-size']}>
                                            {set.items.map((s: any, index: number) => (
                                                <div key={index} className={`${style['container-size--content']} ${this.handleInitialSelection(set.name, s.value) ? style['selected'] : ''}`}
                                                    onClick={() => this.handleClick(set.name, s)}>
                                                    <p>{s.value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );

                            } else if (set.type === 'swatch') {
                                return (
                                    <div key={index}>
                                        <p className={`${style.title}`}>{isMiniCart ? set.name : set.name.toUpperCase()}:</p>
                                        {set.items.map((c: any, index: number) => (
                                            <div key={index} className={`${style['container-color']} ${this.handleInitialSelection(set.name, c.value) ? style['color--selected'] : ''} `}
                                                onClick={() => this.handleClick(set.name, c)}>
                                                <p style={{ backgroundColor: c.value }} className={style['container-color']}></p>
                                            </div>))
                                        }
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </>
        )
    }
}

