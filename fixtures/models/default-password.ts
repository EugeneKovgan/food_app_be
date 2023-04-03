import { Config } from '@core/config';

import * as bcrypt from 'bcrypt';

export const DEFAULT_PASSWORD = bcrypt.hashSync(Config.get.passwordForBcrypt, Config.get.hashSaltFroBcrypt);
