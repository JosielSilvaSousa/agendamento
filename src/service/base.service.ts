import { IBaseRepository } from '../repository/interface/base.repository.interface';
import { IBaseService } from './interfaces/base.service.interface';
import { FindOptionsWhere } from 'typeorm';

export abstract class BaseService<T> implements IBaseService<T> {
  constructor(protected readonly repository: IBaseRepository<T>) {}

  async create(data: any[]): Promise<T[]> {
    return await this.repository.create(data);
  }

  async find(
    findOptionsWhere: FindOptionsWhere<T> | FindOptionsWhere<T>[],
  ): Promise<T> {
    return await this.repository.find(findOptionsWhere);
  }

  async findAll(): Promise<T[]> {
    return await this.repository.findAll();
  }
  async update(id: number, item: any): Promise<T> {
    return await this.repository.update(id, item);
  }

  async delete(id: number): Promise<void> {
    return await this.repository.delete(id);
  }
}
