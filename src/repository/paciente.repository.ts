import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from './base.repository';
import { PacienteEntity } from '../entities/paciente.entity';
import { Repository } from 'typeorm';
import { IPacienteRepository } from './interface/paciente.repository.interface';

@Injectable()
export class PacienteRepository
  extends BaseRepository<PacienteEntity>
  implements IPacienteRepository
{
  constructor(
    @InjectRepository(PacienteEntity)
    private readonly pacienteRepository: Repository<PacienteEntity>,
  ) {
    super(pacienteRepository);
  }
}
