export interface ITodo {
  id: number;
  title: string;
  createdAt: string | Date | number;
  updatedAt: string | null | number;
  isCompleted: boolean;
}
