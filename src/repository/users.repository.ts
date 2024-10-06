import { Injectable } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { BaseRepository } from './base.repository';
import { IUserRepository } from './interface/user.repository.interface';
import { UserEntity } from 'src/entities/user.entity';
import { NotFoundError } from 'rxjs';
@Injectable()
export class UserRepository
  extends BaseRepository<UserEntity>
  implements IUserRepository
{
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
    super(userRepository);
  }

  public async findOneByOrFail(
    where: FindOptionsWhere<UserEntity> | FindOptionsWhere<UserEntity>[],
  ): Promise<UserEntity> {
    try {
      const user = await this.userRepository.findOneByOrFail(where);
      return user;
    } catch (error) {
      throw new NotFoundError(error.message);
    }
  }
}
