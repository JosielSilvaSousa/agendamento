import { CreateAgendamentoDto } from "./create-agendamento.dto";

export class ReturnAgendamentoDto extends CreateAgendamentoDto {
  constructor(partial: Partial<ReturnAgendamentoDto>) {
    super();
    Object.assign(this, partial);
  }
}
