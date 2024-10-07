import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { UsersModule } from './user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth.modules';
import { PacienteModule } from './paciente.modules';
import { AgendamentoModule } from './agendamento.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      synchronize: true,
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
    }),
    AuthModule,
    UsersModule,
    PacienteModule,
    AgendamentoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
