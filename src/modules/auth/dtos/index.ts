export interface ICreateUserDTO {
  email: string;
  password: string;
  name: string;
  birthday: string;
}

export type IUpdateUserDTO = {
  id: string;
} & Omit<ICreateUserDTO, 'password'>;

export interface IChangePasswordDTO {
  id: string;
  password: string;
  password_confirmation: string;
}
