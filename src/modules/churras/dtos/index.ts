export interface ICreateChurrasDTO {
  title: string;
  date: Date;
  hour: string;
  location: string;
  user_id: string;
  description: string;
  participants: {
    name: string;
    value: number;
  }[];
}

export type IUpdateChurrasDTO = {
  id: string;
  user_id: string;
  participants: {
    id?: string;
    name: string;
    value: number;
  }[];
  deleted_participants?: string[];
} & Omit<ICreateChurrasDTO, 'participants'>;