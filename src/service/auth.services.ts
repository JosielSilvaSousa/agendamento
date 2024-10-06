
import { compareSync } from 'bcrypt';
import {JwtService } from '@nestjs/jwt'
import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { IUserService, IUserServiceToken } from './interfaces/user.service.interface';

@Injectable()
export class AuthService {

    constructor(
                @Inject(IUserServiceToken)
                private readonly userService: IUserService,
                // private readonly userService:UserService,
                private readonly jwtService: JwtService,){}

    public async login(user){
        const payload = {
            sub:user.id,
            email:user.email,
        }

        return {
            token: this.jwtService.sign(payload), 
        }
    }

    async validateUser(email:string,password:string){
        let user: UserEntity
        try {
            user = await this.userService.findOneByOrFail({email});
        } catch (error) {
         return null;   
        }
        const isPasswordValid = compareSync(password,user.password);
        if(!isPasswordValid) return null;

        return user;
    }
}
