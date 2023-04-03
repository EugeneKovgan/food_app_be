import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { Config } from '@core/config';

import { UserService } from '../services';

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

  async validate(payload: any) {
    return { ...payload };
  }
}
