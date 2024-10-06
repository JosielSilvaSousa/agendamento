import { Controller, HttpException, HttpStatus, ParseIntPipe } from "@nestjs/common";
import {Get, Delete, Post, Body, Param, HttpCode, UseGuards, Inject,} from "@nestjs/common/decorators";
import { AuthGuard } from "@nestjs/passport";
import {ApiBearerAuth, ApiBody, ApiNotFoundResponse, ApiResponse, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { ReturnUserDto } from "src/model/return.user.dto";
import { CreateUserDto } from "src/model/create-user.dto";
import { IUserRepositoryToken } from "src/repository/interface/user.repository.interface";
import { IUserService } from "src/service/interfaces/user.service.interface";
import { ArrayValidationPipe } from "src/middleware/array.Validation.Pipe";

  
  @ApiUnauthorizedResponse({
    description: "Unauthorized - usuário não autorizado",
  })
  @ApiNotFoundResponse({
    description: "Not Found - usuário não encontrado",
  })
  
@ApiTags("user")
@Controller("user")
  export class UsersController {
  constructor( @Inject(IUserRepositoryToken)private readonly iService: IUserService ) { }
  
  @ApiResponse({ status: 200, description: "sucess." })
  @ApiResponse({ status: 401, description: "Fail autentication." })
  @Post()
  @ApiBody({ type: CreateUserDto })
  public async Create(@Body(ArrayValidationPipe(CreateUserDto)) body: [CreateUserDto]): Promise<ReturnUserDto[]> {
   return await this.iService.create(body);
  }
  
  @UseGuards(AuthGuard("jwt"))
  @ApiBearerAuth("access-token")
  @Get()
  public async findAll(): Promise<ReturnUserDto[]> {
    try {
      const response = (await this.iService.findAll()).map(
        (userEntity) => new ReturnUserDto(userEntity)
      );      
      return response;
    } catch (error) {
      throw new HttpException(
        {
          message: "Erro ao consultar usuario: " + error.message,
          success: false,
          error,
          data: null,
        },
          HttpStatus.BAD_REQUEST
        );
      }
    }  
 
  @UseGuards(AuthGuard("jwt"))
  @ApiBearerAuth("access-token")
  @Get(":id")
  public async findOneById(@Param("id", new ParseIntPipe()) id: number) {
    return await this.iService.findOneByOrFail({ id });
    }
  
  @UseGuards(AuthGuard("jwt"))
  @ApiBearerAuth("access-token")
  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  public async Delete(@Param("id") id: number) {
    await this.iService.delete(id);
  } 
  
  }
  