import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacienteController } from '../controller/paciente.controller';
import { PacienteEntity } from '../entities/paciente.entity';
import { IPacienteRepositoryToken } from '../repository/interface/paciente.repository.interface';
import { PacienteRepository } from '../repository/paciente.repository';
import { IPacienteServiceToken } from '../service/interfaces/paciente.service.interface';
import { PacienteService } from '../service/paciente.service';
import { AgendamentoModule } from './agendamento.module';

@Module({
  imports: [
        TypeOrmModule.forFeature([PacienteEntity]),
        forwardRef(()=>AgendamentoModule)],
  controllers: [PacienteController],
  providers: [
    {
      provide: IPacienteServiceToken,
      useClass: PacienteService,
    },
    {
      provide: IPacienteRepositoryToken,
      useClass: PacienteRepository,
    },
    
  ],
  exports: [IPacienteRepositoryToken, IPacienteServiceToken],
})
export class PacienteModule {}
