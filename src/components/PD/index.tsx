import React from 'react';
import style from '../PD/pd.module.scss';
import Description from '../Product';
import { GET_PRODUCT_BY_ID } from '../../ApoloClient/graphQl';
import client from '../../ApoloClient/client';
import Carousel from '../Slider';



class ProductDescription extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.getProduct = this.getProduct.bind(this);
        this.state = {
            product: null,
            image: null,
        }
    }

    componentDidMount(): void {
        this.getProduct(window.location.href.split('/')[4])
    }

    handleValueFromChild = (value: string) => {
        this.setState({ image: value });
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
        let prod = this.state.product;
        const gallery = prod ? prod.gallery : [];
        let image = this.state.image ? this.state.image : gallery[0];
        return (
            <div >
                <div className={style['pd']} >
                    <div className={style['pd-carousel']}>
                        <Carousel images={gallery} slidesPerView={3} isMiniCart={false} onValueChange={this.handleValueFromChild}></Carousel>
                    </div>
                    <div className={style['pd-image']}>
                        <img src={image}></img>
                    </div>

                    <div className={style['pd-details']}>
                        <Description prod={prod}></Description>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDescription;



