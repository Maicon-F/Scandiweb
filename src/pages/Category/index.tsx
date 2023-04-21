
import React from 'react';
import Cards from '../../components/Cards';
import Header from '../../components/header';



export default class Category extends React.Component{

    render() {
        return(
            <>
                <Header/>
                <Cards />
            </>
        )
    }
}