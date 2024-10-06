import { Controller, UseGuards, Post, Req } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AuthService } from "../service/auth.services";

@ApiTags("login")
@Controller("login")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiResponse({
    status: 200,
    description: "sucess.",
  })
  @ApiResponse({
    status: 401,
    description: "Fail autentication.",
  })
  @ApiQuery({ name: "password", description: "write user password" })
  @ApiQuery({ name: "email", description: "write user email" })
  @UseGuards(AuthGuard("local"))
  @Post()
  public async login(@Req() req: any) {
    return await this.authService.login(req.user);
  }
}
