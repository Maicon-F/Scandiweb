import React from 'react';
import style from '../PD/pd.module.scss';
import Item from '../Product';
import { GET_PRODUCT_BY_ID } from '../../ApoloClient/graphQl';
import client from '../../ApoloClient/client';


let prod:any;


 class ProductDescription extends React.Component<any, any>{
    constructor(props:any) {
        super(props);
        this.getProduct =  this.getProduct.bind(this);
        this.state = {
            product: null,
        }
    }

    componentDidMount(): void {
        this.getProduct(window.location.href.split('/')[4])
        
    }


    async getProduct(id: string) {
        let res = await client.query({
          query: GET_PRODUCT_BY_ID(id.toLocaleLowerCase()),
        });
        
        this.setState({
            product: res.data.product
        })
      }

    
   render() {
    prod = this.state.product;
    const gallery =prod?prod.gallery:[];
   
    return(
        <div className={style['pd']} >
            <div className={style['pd-gallery']}>
                {gallery.map((item:any)=> (
                    <img src={item}></img>
                ))}
            </div>

            <div className={style['pd-image']}>
                <img src={gallery[0]}></img>
            </div>

            <div className={style['pd-details']}>
                <Item prod={prod}></Item>
            </div>
        </div>
    )  
   }
}

export default ProductDescription;

