import { ApiProperty } from '@nestjs/swagger';

export class ApiAuthResponseModel {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiNzMyNTBhYS1lNjZmLTRjYTgtYjk5My1lN2FkNWJiZjljMjkiLCJ1c2VyTmFtZSI6Im5ld191c2VyIiwiZW1haWwiOiJzbWlybm92YUBnbWFpbC5jb20iLCJpYXQiOjE2ODAxNzgyNTJ9.9Fcn12gzfdiL2xgIzRHOGXfONZM-4lI-u-zNu5o_eQs',
  })
  token: string;
}
