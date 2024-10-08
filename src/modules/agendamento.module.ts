import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgendamentoController } from '../controller/agendamento.controller';
import { AgendamentoEntity } from '../entities/agendamento.entity';
import { AgendamentoRepository } from '../repository/agendamento.repository';
import { IAgendamentoRepositoryToken } from '../repository/interface/agendamento.repository.interface';
import { AgendamentoService } from '../service/agendamento.service';
import { IAgendamentoServiceToken } from '../service/interfaces/agendamento.service.interface';

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