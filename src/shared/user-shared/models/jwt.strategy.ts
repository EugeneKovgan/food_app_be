import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { Config } from '@core/config';

import { UserShareService } from '..';
import { JwtResponseInterface } from './jwt-response.interface';

import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly _userShareService: UserShareService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: Config.get.hashKeyForJwtToken,
    });
  }

  async validate(payload: JwtResponseInterface) {
    const user = await this._userShareService.findById(payload.id);

    if (!user) {
      throw new UnprocessableEntityException('Something wrong with token');
    }

    return {
      user,
    };
  }
}
