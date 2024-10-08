import { PacienteEntity } from 'entities/paciente.entity';
import { IBaseService } from './base.service.interface';

export interface IPacienteService extends IBaseService<PacienteEntity> {}

export const IPacienteServiceToken = Symbol.for('IPacienteService');
