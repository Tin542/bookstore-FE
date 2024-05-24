import { gql } from '@apollo/client';

export const GET_ALL_BOOK = gql`
query FindAllBooks {
    findAllBooks(filter: { limit: 5, page: 1 }) {
        currentPage
        limit
        totalPages
        totalProducts
        list {
            authorId
            categoryId
            id
            imageUrl
            isOutofStock
            price
            rate
            title
        }
    }
}
`;