export interface IBook {
  id?: string;
  title: string;
  description: string;
  rate: number;
  price: number;
  imageUrl: string;
  isOutofStock: boolean;
  categoryId: string;
  authorId: string;
}

export interface IBooks {
  findAllBooks: {
    list: [IBook];
    currentPage: number;
    totalProducts: number;
    limit: number;
  };
}

export interface IBookQuery {
  title?: string;
  rate?: number;
  author?: string[];
  category?: string[];
  page?: number;
  limit?: number;
}

