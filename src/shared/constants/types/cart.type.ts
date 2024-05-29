
export type CartType = {
    price: number;
    quantity: number;
    book: {
      id: string;
      price: number;
      title: string;
      imageUrl: string
    }
  }