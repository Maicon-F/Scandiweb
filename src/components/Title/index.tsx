import React from "react";
import style from "./title.module.scss";
import { connect } from 'react-redux';

class Title extends React.Component<any, any>{

    render() {
        const { name, styles } = this.props.TitleData
        const { category } = this.props;
        let title: string = category;
        title = title.charAt(0).toUpperCase() + title.slice(1);
        title = name ? name : title;

        return (
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



export default connect(mapStateToProps, null)(Title)