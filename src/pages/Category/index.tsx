
import React from 'react';
import Cards from '../../components/Cards';
import Header from '../../components/header';
import Title from '../../components/Title';

interface TitleData {
    name: string,
    styles: {
    fontSize: string,
    fontWeight: string
    }
  }
export default class Category extends React.Component{

    render() {
        const backgroundColor ='rgba(57, 55, 72, 0.22)';
        const myTitle: TitleData = { name: "Category Name", styles:{fontSize: "42px", fontWeight:''}};
        return(
            <div style={{margin:'auto -15px'}}>
                <Header/>
                <div style={{backgroundColor:'white', display:'inline-block'}}>
                    <Title TitleData={myTitle}></Title>
                    <Cards />
                </div>
            </div>
        )
    }
}