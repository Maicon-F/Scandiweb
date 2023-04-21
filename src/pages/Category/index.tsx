
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
        const myTitle: TitleData = { name: "WOMEN", styles:{fontSize: "42px", fontWeight:''}};
        return(
            <>
                <Header/>
                <Title TitleData={myTitle}></Title>
                <Cards />
            </>
        )
    }
}