import { Book } from "../constants/types/book.type";

export const books: Book[] = [
  {
    id: "b0a18d9e-f83b-4d56-ae6b-5d3ff06d624e",
    title: "Book Title 8",
    rate: 3.5,
    price: 95000,
    imageUrl:
      "https://res.cloudinary.com/dyo7rdbmx/image/upload/v1716638528/vdqpxwd1gipapftg9dfw.jpg",
    description: "Book Description 8",
    isOutofStock: true,
    limitDiscount: 10,
    category: {
      id: "cat-08",
      name: "Category 8",
    },
    author: {
      id: "auth-08",
      name: "Author Name 8",
    },
    bookPromotion: [],
  },
  {
    id: "e6f2e1a8-6169-45a0-a1fc-fa19b7e6c69d",
    title: "Book Title 7",
    rate: 4.5,
    price: 110000,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/neshtech-1b9aa.appspot.com/o/book6.jpg?alt=media&token=383d707b-ad93-4baa-8b2c-906c6ab11d8f",
    description: "Book Description 7",
    isOutofStock: false,
    limitDiscount: 15,
    category: {
      id: "cat-07",
      name: "Category 7",
    },
    author: {
      id: "auth-07",
      name: "Author Name 7",
    },
    bookPromotion: [],
  },
  {
    id: "dc3b1a6c-8a68-47c6-8b02-74d3069cf46c",
    title: "Book Title 6",
    rate: 5,
    price: 80000,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/neshtech-1b9aa.appspot.com/o/book6.jpg?alt=media&token=383d707b-ad93-4baa-8b2c-906c6ab11d8f",
    description: "Book Description 6",
    isOutofStock: false,
    limitDiscount: 20,
    category: {
      id: "cat-06",
      name: "Category 6",
    },
    author: {
      id: "auth-06",
      name: "Author Name 6",
    },
    bookPromotion: [],
  },
  {
    id: "21efaf17-ebc8-4b02-8a6a-d28b1da93f41",
    title: "Book Title 5",
    rate: 4,
    price: 120000,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/neshtech-1b9aa.appspot.com/o/book6.jpg?alt=media&token=383d707b-ad93-4baa-8b2c-906c6ab11d8f",
    description: "Book Description 5",
    isOutofStock: true,
    limitDiscount: 12,
    category: {
      id: "cat-05",
      name: "Category 5",
    },
    author: {
      id: "auth-05",
      name: "Author Name 5",
    },
    bookPromotion: [],
  },
  {
    id: "fa9d29fd-7f20-4e26-8e2a-56afca0e3a30",
    title: "Book Title 4",
    rate: 3.5,
    price: 90000,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/neshtech-1b9aa.appspot.com/o/book6.jpg?alt=media&token=383d707b-ad93-4baa-8b2c-906c6ab11d8f",
    description: "Book Description 4",
    isOutofStock: false,
    limitDiscount: 8,
    category: {
      id: "cat-04",
      name: "Category 4",
    },
    author: {
      id: "auth-04",
      name: "Author Name 4",
    },
    bookPromotion: [],
  },
];
