import { PacienteEntity } from 'entities/paciente.entity';
import { IBaseRepository } from './base.repository.interface';

export interface IPacienteRepository extends IBaseRepository<PacienteEntity> {}

export const IPacienteRepositoryToken = Symbol.for('IPacienteRepository');
