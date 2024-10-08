import { HttpException, Inject, Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { IAgendamentoService } from './interfaces/agendamento.service.interface';
import {
  IAgendamentoRepository,
  IAgendamentoRepositoryToken,
} from 'src/repository/interface/agendamento.repository.interface';
import { AgendamentoEntity } from 'src/entities/agendamento.entity';
import { CreateAgendamentoDto } from 'src/model/create-agendamento.dto';
@Injectable()
export class AgendamentoService
  extends BaseService<AgendamentoEntity>
  implements IAgendamentoService
{
  constructor(
    @Inject(IAgendamentoRepositoryToken)
    private readonly agendamentoRepository: IAgendamentoRepository,
  ) {
    super(agendamentoRepository);
  }

  async createAgenda(data: [CreateAgendamentoDto]): Promise<AgendamentoEntity[]> {
    const isExiste = await this.agendamentoRepository.findDate(data[0].data)
    if(isExiste){
      throw new HttpException(`já existe um agendamento neste horário.`, 444);
    }
    return await this.agendamentoRepository.create(data);

  }
}
