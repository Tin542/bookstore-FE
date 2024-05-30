


  type Book = {
    id: string;
    price: number;
    title: string;
    imageUrl: string;
  };
  
  export type CartItemType = {
    id: string;
    price: number;
    quantity: number;
    book: Book;
  };
  
  export type CartStoreType = {
    items: CartItemType[];
  };

  export type UpdateCartItemType = {
    id: string;
    quantity: number;
  }