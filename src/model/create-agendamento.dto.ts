import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDate } from 'class-validator';
import { CreatePacienteDto } from './create.paciente.dto';

export class CreateAgendamentoDto {
  @ApiProperty({ description: 'informe a data do agendamento', example: '2024-10-10' })
  @Transform(({ value }) => new Date(value))
  @IsDate()
  data: Date;

  @ApiProperty({ description: "informe a descricao do agendamento", example: "teste" })
  atendimento?: string;

  @ApiProperty({
    type: () => CreatePacienteDto,
    description: "Código do paciente",
    example: "1",
  })
  paciente_id: CreatePacienteDto;


}
