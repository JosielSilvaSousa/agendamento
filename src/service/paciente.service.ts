import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { PacienteEntity } from '../entities/paciente.entity';
import { IPacienteService } from './interfaces/paciente.service.interface';
import {
  IPacienteRepository,
  IPacienteRepositoryToken,
} from '../repository/interface/paciente.repository.interface';

@Injectable()
export class PacienteService
  extends BaseService<PacienteEntity>
  implements IPacienteService
{
  constructor(
    @Inject(IPacienteRepositoryToken)
    private readonly pacienteRepository: IPacienteRepository,
  ) {
    super(pacienteRepository);
  }
}
