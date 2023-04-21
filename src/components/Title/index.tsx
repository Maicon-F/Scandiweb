import React from "react";
import style from "./title.module.scss";

interface Props {
    TitleData:{
        name: string;
        styles: {
            fontSize: string,
            fontWeight: string
            }
    }
}


export default class Title extends React.Component<Props>{
    render(){
        const {name, styles} = this.props.TitleData
        return(
            <div className={style.container} style={styles}>
                <p>{name}</p>
            </div>
        )
    }
}