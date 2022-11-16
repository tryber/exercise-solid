export interface IModelReader<T> {
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T | null>
}

export interface IModelWriter<T> {
  create(t: Omit<T, 'id'>): Promise<T>
  update(t: T): Promise<T>
}
export interface IModelDelete {
  removeById(id: string): Promise<boolean>
}
