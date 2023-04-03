import { UserEntity } from '@entities/user';

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface ExpressRequestInterface extends Request {
  user?: UserEntity;
}
