import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { ExpressRequestInterface } from '@shared/user';

export const UserDecorator = createParamDecorator((data: any, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<ExpressRequestInterface>();

  if (!request.user) {
    return null;
  }

  if (data) {
    return request.user[data];
  }

  return request.user;
});
