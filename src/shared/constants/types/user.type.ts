export type UserStoreType = {
  id: string;
  fullName: string;
  username: string;
  accessToken: string;
  refreshToken: string;
  avatar: string;
};

export type ProfileUserType = {
  address: string;
  avatar: string;
  email: string;
  fullName: string;
  id: string;
  phoneNumber: string;
  username: string;
};

export type UpdateUserType = {
  id: string
  address: string;
  avatar: string;
  email: string;
  fullName: string;
  phoneNumber: string;
}
