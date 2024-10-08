import { FindOptionsWhere } from 'typeorm';
export interface IBaseRepository<T> {
  create(data: any[]): Promise<T[]>;
  find(
    FindOptionsWhere: FindOptionsWhere<T> | FindOptionsWhere<T>[],
  ): Promise<T>;
  findAll(): Promise<T[]>;
  update(id: number, item: any): Promise<T>;
  delete(id: number): Promise<void>;
}

export const IBaseRepositoryToken = Symbol.for('IBaseRepository');
