export interface ICreateChurrasDTO {
  title: string;
  date: Date;
  hour: string;
  location: string;
  user_id: string;
  description: string;
  suggest_value: string;
  suggest_drink_value: string;
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
    churras_id?: string;
  }[];
  deleted_participants?: string[];
} & Omit<ICreateChurrasDTO, 'participants'>;
