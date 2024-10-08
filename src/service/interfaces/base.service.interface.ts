import { FindOptionsWhere } from 'typeorm';
export interface IBaseService<T> {
  create(data: any[]): Promise<T[]>;
  find(
    findOptionsWhere: FindOptionsWhere<T> | FindOptionsWhere<T>[],
  ): Promise<T>;
  findAll(): Promise<T[]>;
  update(id: number, item: any): Promise<T>;
  delete(id: number): Promise<void>;
}

export const IBaseServiceToken = Symbol.for('IBaseService');
