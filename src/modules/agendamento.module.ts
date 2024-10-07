import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgendamentoController } from 'src/controller/agendamento.controller';
import { AgendamentoEntity } from 'src/entities/agendamento.entity';
import { AgendamentoRepository } from 'src/repository/agendamento.repository';
import { IAgendamentoRepositoryToken } from 'src/repository/interface/agendamento.repository.interface';
import { AgendamentoService } from 'src/service/agendamento.service';
import { IAgendamentoServiceToken } from 'src/service/interfaces/agendamento.service.interface';

@Module({
  imports: [TypeOrmModule.forFeature([AgendamentoEntity])],
  controllers: [AgendamentoController],
  providers: [
    {
      provide: IAgendamentoServiceToken,
      useClass: AgendamentoService,
    },
    {
      provide: IAgendamentoRepositoryToken,
      useClass: AgendamentoRepository,
    },
  ],
  exports: [IAgendamentoRepositoryToken, IAgendamentoServiceToken],
})
export class AgendamentoModule {}