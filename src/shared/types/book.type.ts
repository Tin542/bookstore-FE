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
    currentPage: number;
    pages: number;
    data: IBook[] | [];
  };
}

export type IBookMutation = {
  addBook: IBook;
};
