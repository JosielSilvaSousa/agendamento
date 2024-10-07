import { ApiProperty } from "@nestjs/swagger";
import { CreateAgendamentoDto } from "./create-agendamento.dto";
import { AgendamentoEntity } from "src/entities/agendamento.entity";

export class ReturnAgendamentoDto extends CreateAgendamentoDto {
  @ApiProperty({ description: 'ID do paciente', example: 1 })
  pacienteId: number; 

  constructor(agendamento: AgendamentoEntity) {
    super();
    this.data = agendamento.data;
    this.atendimento = agendamento.atendimento;
    this.pacienteId = agendamento.paciente?.id; 
  }
}
