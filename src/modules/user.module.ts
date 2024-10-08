import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { UserRepository } from '../repository/users.repository';
import { UserService } from '../service/users.service';
import { UsersController } from '../controller/user.controller';
import { IUserServiceToken } from '../service/interfaces/user.service.interface';
import { IUserRepositoryToken } from '../repository/interface/user.repository.interface';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [
    {
      provide: IUserServiceToken,
      useClass: UserService,
    },
    {
      provide: IUserRepositoryToken,
      useClass: UserRepository,
    },
  ],
  exports: [IUserRepositoryToken, IUserServiceToken],
})
export class UsersModule {}
