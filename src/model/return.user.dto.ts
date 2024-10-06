import { UserEntity } from "../entities/user.entity";

export class ReturnUserDto {
  id: number;
  name: string;
  email: string;

  constructor(userEntity?: UserEntity) {
    this.email = userEntity?.email;
    this.name = userEntity?.name;
    this.id = userEntity?.id;
  }
}
