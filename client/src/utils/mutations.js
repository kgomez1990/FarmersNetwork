import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const CREATE_PRODUCT = gql`
  mutation createProduct($product: String!, 
    $description: String!, 
    $price: Float!, 
    $categoryId: ID!, 
    $image: String)
  {
    createProduct(product: $product, 
      description: $description, 
      price: $price, 
      categoryId: $categoryId, 
      image: $image) {
      _id
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation addProduct($products: [ID]!) {
    addProduct(products: $products) {
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
