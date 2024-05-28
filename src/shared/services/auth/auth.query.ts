import { SignUpFieldType } from "../../constants/types/auth.type";

export const signup = (data?: SignUpFieldType) => {
  return {
    operationName: "Signup",
    query: ` mutation Signup(
      $fullName: String!,
      $email: String!,
      $phoneNumber: String!,
      $address: String!,
      $username: String!,
      $password: String!,
      $avatar: String!
    ) {
      signup(
        fullName: $fullName,
        email: $email,
        phoneNumber: $phoneNumber,
        address: $address,
        username: $username,
        password: $password,
        avatar: $avatar
      ) {
        address
        avatar
        createdAt
        email
        id
        isActive
        password
        phoneNumber
        refreshToken
        updatedAt
        username
      }
    }
    
      `,
    variables: data || ({} as SignUpFieldType),
  };
};
