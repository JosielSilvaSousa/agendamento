import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ description: "informe seu name", example: "admin" })
  @IsNotEmpty()
  name?: string;

  @ApiProperty({ description: "informe seu email", example: "admin@admin.com" })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: "informe sua senha", example: "admin" })
  password: string;  
}
