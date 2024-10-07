import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { IAgendamentoService } from './interfaces/agendamento.service.interface';
import {
  IAgendamentoRepository,
  IAgendamentoRepositoryToken,
} from 'src/repository/interface/agendamento.repository.interface';
import { AgendamentoEntity } from 'src/entities/agendamento.entity';
@Injectable()
export class AgendamentoService
  extends BaseService<AgendamentoEntity>
  implements IAgendamentoService
{
  constructor(
    @Inject(IAgendamentoRepositoryToken)
    private readonly agendamentoRepository: IAgendamentoRepository,
  ) {
    super(agendamentoRepository);
  }
}
