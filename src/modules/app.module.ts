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
      type: "mysql",
      host: "127.0.0.1",
      port: Number(3306),
      username: "consulta",
      password: "root",
      database: "agendamento",
      entities: [__dirname + "/../**/*.entity.{js,ts}"],
      migrations:
         [`${__dirname}/../migrations/{.ts,*.js}`],
      migrationsRun: true,
      logging: true,
      // type: 'sqlite',
      // database: 'db',
      // // synchronize: true,
      // entities: [__dirname + '/../**/*.entity.{js,ts}'],
      // migrations:
      // [`${__dirname}/../migrations/{.ts,*.js}`],
      // migrationsRun: true,
      // logging: true
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
