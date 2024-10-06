import { UserEntity } from 'src/entities/user.entity';
import { IBaseService } from './base.service.interface';
import { FindOptionsWhere } from 'typeorm';

export interface IUserService extends IBaseService<UserEntity> {
  findOneByOrFail(
    where: FindOptionsWhere<UserEntity> | FindOptionsWhere<UserEntity>[],
  ): Promise<UserEntity>;
  comparePasswords(senha: string, hashedSenha: string): boolean;
}

export const IUserServiceToken = Symbol.for('IUserService');
