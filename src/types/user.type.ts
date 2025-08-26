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
  iss: string;
  iat: number;
  exp: number;
  nbf: number;
  jti: string;
  sub: string;
  prv: string;
  id: number;
  username: string;
  name: string;
  email: string;
  roles: string;
  level_id: number | null;
  balance: string;
  commission: string;
  deals_completed: number;
  journeys: number;
  invitation_code: string | null;
};

export type TChangePassword = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export type TUserInfo = {
  id: number;
  username: string;
  name: string;
  email: string;
  roles: string[]; // Now an array of strings
  level_id: number | null;
  balance: string;
  commission: string;
  deals_completed: number;
  journeys: number;
  invitation_code: string | null;
  targetDealCompletionPercentage: number;
  avatar: string;
};
