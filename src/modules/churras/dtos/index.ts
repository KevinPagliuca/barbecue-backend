export interface ICreateChurrasDTO {
  title: string;
  date: Date;
  hour: string;
  location: string;
  description: string;
  participants: {
    name: string;
    value: number;
  }[];
}
