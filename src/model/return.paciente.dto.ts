import { CreatePacienteDto } from './create.paciente.dto';

export class ReturnPacienteDto extends CreatePacienteDto {
  constructor(partial: Partial<ReturnPacienteDto>) {
    super();
    Object.assign(this, partial);
  }
}
