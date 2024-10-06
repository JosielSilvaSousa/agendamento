import { FindOptionsWhere, Repository } from "typeorm";
import { IBaseRepository } from "./interface/base.repository.interface";

export abstract class BaseRepository<T> implements IBaseRepository<T> {
  constructor(protected readonly repository: Repository<T>) {}

  async create(data: any[]): Promise<T[]> {
    const entity = this.repository.create(data);
    return await this.repository.save(entity);
  }

  async find(findOptionsWhere: FindOptionsWhere<T> | FindOptionsWhere<T>[]): Promise<T>{
    return await this.repository.findOneBy(findOptionsWhere);
  }

  async findAll(): Promise<T[]> {
    return await this.repository.find();
  }

  async update(id: number, item: any): Promise<T> {
    await this.repository.update(id, item);
    return await this.repository.findOneBy({ id } as any);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
