export type User = {
  user_id: string;
  user_email: string;
  user_password: string;
  user_name: string;
};

export type UpdateData = {
  user_name?: string;
  user_password?: string;
};

export interface AuthenticationData {
  id: string;
}
