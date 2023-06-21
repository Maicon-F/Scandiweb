
import React from 'react';
import Cards from '../../components/Cards';
import Header from '../../components/header';
import Title from '../../components/Title';
import style from './category.module.scss';
import {connect} from 'react-redux';

interface TitleData {
    name: string,
    styles: {
    fontSize: string,
    fontWeight: string
    }
  }

  class Category extends React.Component<any, any>{

    render() {
        const myTitle: TitleData = { name: "", styles:{fontSize: "42px", fontWeight:''}};
        const { displayCart} = this.props;
        return(
            <div style={{margin:'auto -15px'}}>
                <div style={{zIndex:'100', position: 'relative'}}>
                    <Header/>
                </div>
                <div style={{position:'relative'}} >
                    <Title TitleData={myTitle}></Title>
                    <Cards />
                    <div className={displayCart?style['overlay']:''}></div>
                </div>
               
            </div>
        )
    }
}

const mapStateToProps = (e: any) => {
    return ({
        displayCart: e.displayCart
    })
}



export default connect(mapStateToProps)(Category)