


  type Book = {
    id: string;
    price: number;
    title: string;
    imageUrl: string;
  };
  
  export type CartItemType = {
    price: number;
    quantity: number;
    book: Book;
  };
  
  export type CartStoreType = {
    items: CartItemType[];
  };