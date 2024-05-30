import { UpdateCartItemType } from "../../constants/types/cart.type";

export const allCartItemQuery = (uid: string) => {
    return {
      operationName: "GetCart",
      query: `
      query GetCart($uid: String!) {
        getCart(uid: $uid) {
            id
            price
            quantity
            book {
                id
                price
                title
                imageUrl
            }
        }
      }         
        `,
      variables: {uid: uid},
    };
  };
  
  export const updateCart = (data: UpdateCartItemType) => {
    return {
      operationName: "UpdateCart",
      query: `
      mutation UpdateCart($id: String!, $quantity: Int!) {
        updateCart(id: $id, quantity: $quantity) {
          id
          price
          quantity
          book {
              id
              price
              title
              imageUrl
          }
        }
      }
        `,
      variables: data,
    };
  }

  export const removeCartItem = (id: string) => {
    return {
      operationName: "RemoveCart",
      query: `
      mutation RemoveCart($id: String!) {
        removeCart(id: $id) {
            id
        }
      }
        `,
      variables: {id: id},
    };
  }