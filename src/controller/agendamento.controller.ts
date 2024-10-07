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
import { CreateAgendamentoDto } from 'src/model/create-agendamento.dto';
import { ReturnAgendamentoDto } from 'src/model/return-agendamento.dto';
import { IAgendamentoService, IAgendamentoServiceToken } from 'src/service/interfaces/agendamento.service.interface';

@ApiUnauthorizedResponse({
  description: 'Unauthorized - usuário não autorizado',
})
@ApiNotFoundResponse({ description: 'Not Found - usuário não encontrado' })
@ApiTags('agendamento')
@Controller('agendamento')
@ApiTags('agendamento')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('access-token')
@ApiResponse({ status: 200, description: 'sucess.' })
@ApiResponse({ status: 401, description: 'Unauthorized' })
@ApiResponse({ status: 500, description: 'Internal server error' })
@ApiResponse({ status: 404, description: 'Not found' })
@ApiResponse({ status: 400, description: 'Bad request' })
export class AgendamentoController {
  constructor(
    @Inject(IAgendamentoServiceToken)
    private readonly iService: IAgendamentoService,
  ) {}

  @Post()
  @ApiBody({ type: [CreateAgendamentoDto] })
  public async Create(
    @Body(ArrayValidationPipe(CreateAgendamentoDto))
    body: [CreateAgendamentoDto],
  ): Promise<ReturnAgendamentoDto[]> {
    return await this.iService.create(body);
  }
  @Get()
  public async findAll(): Promise<ReturnAgendamentoDto[]> {
    try {
      return await this.iService.findAll();
    } catch (error) {
      throw new HttpException(
        {
          message: 'Erro ao consultar agendamento: ' + error.message,
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

  @Delete(':id')
  public async Delete(@Param('id') id: number): Promise<string> {
    try {
      await this.iService.delete(id);
      return 'agendamento excluído com sucesso!';
    } catch (error) {
      return `Erro eo excluír o agendamento! ${id} , ${error.message}`;
    }
  }
}
