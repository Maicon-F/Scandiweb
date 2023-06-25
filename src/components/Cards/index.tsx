import React from 'react';
import Product from '../Cards/Card/index';
import style from './cards.module.scss';
import client from '../../ApoloClient/client';
import { GET_PRODUCTS_BY_CATEGORY } from '../../ApoloClient/graphQl';
import { connect } from 'react-redux';



class Cards extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.fetchProductsByCategory = this.fetchProductsByCategory.bind(this)
    this.state = {
      products: [],
    }
  }

  componentDidMount(): void {
    this.fetchProductsByCategory(this.props.category)
  }

  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
    if (prevProps.category !== this.props.category)
      this.fetchProductsByCategory(this.props.category)
  }

  async fetchProductsByCategory(category: string) {
    let res = await client.query({
      query: GET_PRODUCTS_BY_CATEGORY(category.toLocaleLowerCase()),
    });

    this.setState({
      products: [...res.data.category.products]
    })

  }


  render() {

    return (
      <div className={style.containerParent}>
        <div className={style.container} >
          {this.state.products.map((item: any) => (
            <Product key={item.id} product={item} />
          ))}
        </div>
        <div className={style.overlay}></div>
      </div>
    )

  }
}


const mapStateToProps = (e: any) => {
  return ({
    category: e.category

  })
}



export default connect(mapStateToProps)(Cards)

