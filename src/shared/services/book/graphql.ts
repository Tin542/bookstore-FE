import { gql } from '@apollo/client';

export const GET_ALL_BOOK = gql`
query FindAllBooks {
    findAllBooks(filter: { page: 1, limit: 12 }) {
        currentPage
        pages
        data {
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