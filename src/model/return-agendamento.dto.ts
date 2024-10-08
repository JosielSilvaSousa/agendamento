import { CreateAgendamentoDto } from "./create-agendamento.dto";
import { AgendamentoEntity } from "src/entities/agendamento.entity";
import { CreatePacienteDto } from "./create.paciente.dto";

export class ReturnAgendamentoDto extends CreateAgendamentoDto {
  id :number
  paciente?: CreatePacienteDto;

  constructor(agendamento: AgendamentoEntity) {
    super();
    console.log(agendamento);
    this.id = agendamento.id;
    this.paciente = agendamento.paciente;
    this.data = agendamento.data;
    this.atendimento = agendamento.atendimento;
    this.pacienteId = agendamento.pacienteId; 
  }
}
