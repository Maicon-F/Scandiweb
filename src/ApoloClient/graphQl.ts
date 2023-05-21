import {gql} from '@apollo/client'

export const GET_ALL_CATEGORIES = gql`
  query {
      categories {
          name
      }
  }
`;

export const GET_ALL_CURRENCIES = gql`
query {
  currencies {
    label
    symbol
  }
}
`;

export const GET_PRODUCTS_BY_CATEGORY = (productsCategory: string) => gql`
query{
  category(input: {title: "${productsCategory}"}) {
      products {
      name
      category
      brand
      id
      gallery
      inStock
      attributes {
        name
        type
        items {
          value
          displayValue
        }
      }
      prices {
        currency {
          symbol
        }
        amount
      }
    }
  }
}
`;

export const GET_PRODUCT_BY_ID = (productId: string) => gql`
query{
  product(id: "${productId}") {
    id
    name
    brand
    description
    gallery
    description
    inStock
    prices {
      amount
      currency {
        symbol
        label
      }
    }
    attributes {
      name
      type
      items {
        value
        displayValue
      }
    }
  }
}
`;