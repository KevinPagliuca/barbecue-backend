type User = {
  id: string;
  name: string;
  email: string;
  birthday: Date;
  password: string;
  created_at: Date;
  updated_at: Date;
};

declare namespace Express {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Request {
    user: User;
  }
}
