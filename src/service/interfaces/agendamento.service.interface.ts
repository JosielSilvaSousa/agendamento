import { AgendamentoEntity } from 'src/entities/agendamento.entity';
import { IBaseService } from './base.service.interface';

export interface IAgendamentoService extends IBaseService<AgendamentoEntity> {}

export const IAgendamentoServiceToken = Symbol.for('IAgendamentoService');