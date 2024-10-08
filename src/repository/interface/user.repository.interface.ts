import { UserEntity } from 'entities/user.entity';
import { IBaseRepository } from './base.repository.interface';
import { FindOptionsWhere } from 'typeorm';

export interface IUserRepository extends IBaseRepository<UserEntity> {
  findOneByOrFail(
    where: FindOptionsWhere<UserEntity> | FindOptionsWhere<UserEntity>[],
  ): Promise<UserEntity>;
}

export const IUserRepositoryToken = Symbol.for('IUserRepository');
