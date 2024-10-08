import {
  Controller,
  HttpException,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import {
  Get,
  Delete,
  Post,
  Body,
  Param,
  UseGuards,
  Inject,
  Patch
} from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiBody,
  ApiNotFoundResponse,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { ArrayValidationPipe } from 'src/middleware/array.Validation.Pipe';
import { CreatePacienteDto } from 'src/model/create.paciente.dto';
import { ReturnPacienteDto } from 'src/model/return.paciente.dto';
import { IPacienteService, IPacienteServiceToken } from 'src/service/interfaces/paciente.service.interface';

@ApiUnauthorizedResponse({
  description: 'Unauthorized - usuário não autorizado',
})
@ApiNotFoundResponse({ description: 'Not Found - usuário não encontrado' })
@ApiTags('paciente')
@Controller('paciente')
@ApiTags('paciente')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('access-token')
@ApiResponse({ status: 200, description: 'sucess.' })
@ApiResponse({ status: 401, description: 'Unauthorized' })
@ApiResponse({ status: 500, description: 'Internal server error' })
@ApiResponse({ status: 404, description: 'Not found' })
@ApiResponse({ status: 400, description: 'Bad request' })
export class PacienteController {
  constructor(
    @Inject(IPacienteServiceToken)
    private readonly iService: IPacienteService,
  ) {}

  @Post()
  @ApiBody({ type: [CreatePacienteDto] })
  public async Create(
    @Body(ArrayValidationPipe(CreatePacienteDto)) body: [CreatePacienteDto],
  ): Promise<ReturnPacienteDto[]> {
    return await this.iService.create(body);
  }
  @Get()
  public async findAll(): Promise<ReturnPacienteDto[]> {
    try {
      return await this.iService.findAll();
    } catch (error) {
      throw new HttpException(
        {
          message: 'Erro ao consultar paciente: ' + error.message,
          success: false,
          error,
          data: null,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get(':id')
  public async findOneById(@Param('id', new ParseIntPipe()) id: number) {
    return await this.iService.find({ id });
  }

  @Patch(":id")
  public async update(
    @Param("id") id: number,
    @Body() updatePaciente: CreatePacienteDto
  ) :Promise<ReturnPacienteDto>{
    try {
      return await this.iService.update(id, updatePaciente);   
    } catch (error) {
      throw new HttpException(
        {
          message: 'Erro ao alterar o paciente: ' + error.message,
          success: false,
          error,
          data: null,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete(':id')
  public async Delete(@Param('id') id: number): Promise<string> {
    try {
      await this.iService.delete(id);
      return 'Paciente excluido com sucesso!';
    } catch (error) {
      throw new HttpException(
        {
          message: 'Erro ao deletar o paciente: ' + error.message,
          success: false,
          error,
          data: null,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
