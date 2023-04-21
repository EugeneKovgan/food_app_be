import { ApiProperty } from '@nestjs/swagger';

export class UserFavoriteProductDto {
  @ApiProperty({ example: 'a42910c9-048c-4429-ac8c-e6f454ecf442' })
  readonly productId: string;
}
