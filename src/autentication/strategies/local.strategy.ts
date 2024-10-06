import { UnauthorizedException } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../../service/auth.services";

@Injectable()
export class LocaStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: "email" });
  }

  public async validate(email: string, password: string) {
    const user = await this.authService.validateUser(email, password);

    if (!user)
      throw new UnauthorizedException("E-mail e/ou senha inválidos");

    return user;
  }
}
