
export type CartStoreType = [{
    price: number;
    quantity: number;
    book: {
      id: string;
      price: number;
      title: string;
      imageUrl: string
    }
  }]