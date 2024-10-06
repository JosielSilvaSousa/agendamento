import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { AuthModule } from './modules/auth.modules';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      synchronize: true,
      entities: [UserEntity], 
    }),AuthModule,UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
