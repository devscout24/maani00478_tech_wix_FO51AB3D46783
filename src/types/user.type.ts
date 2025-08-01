export type TUserRole = "Admin";

export type TJwtPayload = {
  id: string;
  role: TUserRole;
  email: string;
  avatar: string;
  firstName: string;
  lastName: string;
};

export type TCurrentLoginUser = {
  id: string;
  role: TUserRole;
  email: string;
  avatar: string;
  firstName: string;
  lastName: string;
  iat: number;
  exp: number;
};

export type TChangePassword = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export type TUser = {
  id: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
  designation: string;
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  phoneNumber: string;
  role: TUserRole;
  userStatus: "Active" | "Deactivate";
  isDeleted: boolean;
  isPasswordChanged: boolean;
};
