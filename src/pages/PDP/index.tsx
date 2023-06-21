import ProductDescription from "../../components/PD";
import React from 'react';
import Header from "../../components/header";
import { connect } from "react-redux";
import style from "./pdp.module.scss"


class PDP extends React.Component<any, any>{

    hideMiniCart(){
        
    }

    render() {
        const {displayCart} = this.props;
        return(
            <div>
                <div style={{zIndex:'100', position: 'relative'}}>
                    <Header></Header>
                </div>
                <div style={{ position:'relative'}} >
                     <ProductDescription ></ProductDescription>  
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



export default connect(mapStateToProps)(PDP)