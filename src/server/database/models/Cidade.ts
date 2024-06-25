export interface ICidade {
  id: number,
  nome: string
}

export interface IQueryProps {
  id?: number,
  page?: number,
  limit?: number,
  filter?: string
}