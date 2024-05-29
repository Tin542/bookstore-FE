export const allCartItemQuery = (uid: string) => {
    return {
      operationName: "GetCart",
      query: `
      query GetCart($uid: String!) {
        getCart(uid: $uid) {
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
  