import { AgendamentoEntity } from 'entities/agendamento.entity';
import { IBaseRepository } from './base.repository.interface';

export interface IAgendamentoRepository
  extends IBaseRepository<AgendamentoEntity> {
    findDate(data: Date): Promise<AgendamentoEntity>;
  }

export const IAgendamentoRepositoryToken = Symbol.for('IAgendamentoRepository');
