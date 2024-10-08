import { Inject, Injectable } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { BaseService } from './base.service';
import { IUserService } from './interfaces/user.service.interface';
import { UserEntity } from '../entities/user.entity';
import {
  IUserRepository,
  IUserRepositoryToken,
} from '../repository/interface/user.repository.interface';
import { FindOptionsWhere } from 'typeorm';

@Injectable()
export class UserService
  extends BaseService<UserEntity>
  implements IUserService
{
  constructor(
    @Inject(IUserRepositoryToken)
    private readonly userRepository: IUserRepository,
  ) {
    super(userRepository);
  }

  public async findOneByOrFail(
    where: FindOptionsWhere<UserEntity> | FindOptionsWhere<UserEntity>[],
  ): Promise<UserEntity> {
    return await this.userRepository.findOneByOrFail(where);
  }
  comparePasswords(senha: string, hashedSenha: string): boolean {
    return compareSync(senha, hashedSenha);
  }
}
