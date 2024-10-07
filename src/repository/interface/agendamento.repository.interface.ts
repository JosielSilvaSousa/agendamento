import { AgendamentoEntity } from 'src/entities/agendamento.entity';
import { IBaseRepository } from './base.repository.interface';

export interface IAgendamentoRepository
  extends IBaseRepository<AgendamentoEntity> {}

export const IAgendamentoRepositoryToken = Symbol.for('IAgendamentoRepository');
