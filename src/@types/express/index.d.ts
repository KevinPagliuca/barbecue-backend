type User = {
  id: string;
  name: string;
  email: string;
  birthday: Date;
  created_at: Date;
  updated_at: Date;
};

declare namespace Express {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Request {
    user: User;
  }
}
