import React from "react";
import style from "./title.module.scss";
import {connect} from 'react-redux';
import { updateCategory } from "../../adapters/slices/category";

interface Props {
    TitleData:{
        name: string;
        styles: {
            fontSize: string,
            fontWeight: string
            }
    }
}


class Title extends React.Component<any, any>{

    render(){
        const {name, styles} = this.props.TitleData
        const {category} = this.props;
        let title: string = category;
        title = title.charAt(0).toUpperCase() + title.slice(1);
        
        return(
            <div className={style.container} style={styles}>
                <p>{title}</p>
            </div>
        )
    }
}


const mapStateToProps = (e: any) => {
    return ({
        category: e.category
    })
}

const mapDispatchToProps = (dispatch:any) => ({
    updateCategory: (payload:string) => dispatch(updateCategory(payload)),
  });

export default connect(mapStateToProps, null)(Title)