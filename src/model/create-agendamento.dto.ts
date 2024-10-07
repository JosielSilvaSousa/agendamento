import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDate } from 'class-validator';

export class CreateAgendamentoDto {
  @ApiProperty({ description: 'informe a data do agendamento', example: '2024-10-10' })
  @Transform(({ value }) => new Date(value))
  @IsDate()
  data: Date;

  @ApiProperty({ description: "informe a descricao do agendamento", example: "teste" })
  atendimento?: string;

  @ApiProperty({description: "Código do paciente",example: "1",
  })
  pacienteId: number;

}
