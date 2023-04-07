import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { Config } from '@core/config';
import { UserService } from '@modules/user/services';

import { JwtResponseInterface } from './jwt-response.interface';

import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly _userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: Config.get.hashKeyForJwtToken,
    });
  }

  async validate(payload: JwtResponseInterface) {
    const user = await this._userService.findById(payload.id);

    if (!user) {
      throw new UnprocessableEntityException('Something wrong with token, ya-ha-ha');
    }

    return {
      user,
    };
  }
}
