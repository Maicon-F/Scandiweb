import Products from "../../components/Products";
import React from 'react';
import { useContext } from 'react';
import {ProductContext} from '../../contexts/Product';

export default class Category extends React.Component{

    render() {
        return(
            <>
                <Products />
            </>
        )
    }
}