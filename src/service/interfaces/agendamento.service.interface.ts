import { AgendamentoEntity } from 'entities/agendamento.entity';
import { IBaseService } from './base.service.interface';
import { CreateAgendamentoDto } from 'model/create-agendamento.dto';

export interface IAgendamentoService extends IBaseService<AgendamentoEntity> {
    createAgenda(data: CreateAgendamentoDto[]): Promise<AgendamentoEntity[]>
}

export const IAgendamentoServiceToken = Symbol.for('IAgendamentoService');