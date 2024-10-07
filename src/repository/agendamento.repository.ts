import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from './base.repository';
import { Repository } from 'typeorm';
import { AgendamentoEntity } from 'src/entities/agendamento.entity';
import { IAgendamentoRepository } from './interface/agendamento.repository.interface';

@Injectable()
export class AgendamentoRepository
  extends BaseRepository<AgendamentoEntity>
  implements IAgendamentoRepository
{
  constructor(
    @InjectRepository(AgendamentoEntity)
    private readonly agendamentoRepository: Repository<AgendamentoEntity>,
  ) {
    super(agendamentoRepository);
  }
}
