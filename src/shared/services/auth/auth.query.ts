import {
  LoginFieldType,
  SignUpFieldType,
} from "../../constants/types/auth.type";

export const signin = (data?: LoginFieldType) => {
  return {
    operationName: "Signin",
    query: ` mutation Signin($username: String!, $password: String!) {
        signin(password: $password, username: $username) {
          accessToken
          userInfo {
            fullName
            username
            id
            avatar
            refreshToken
          }
        }
      }
      `,
    variables: data || ({} as LoginFieldType),
  };
};
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
