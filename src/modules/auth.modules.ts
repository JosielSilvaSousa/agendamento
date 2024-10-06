import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { LocaStrategy } from '../autentication/strategies/local.strategy';
import { JwtStrategy } from '../autentication/strategies/jwt.strategy';
import { jwtConstants } from '../autentication/constants';
import { AuthService } from '../service/auth.services';
import { AuthController } from 'src/controller/auth.controller';
import { UsersModule } from './user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    PassportModule,
    JwtModule.register({
      global: true,
      privateKey: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocaStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
