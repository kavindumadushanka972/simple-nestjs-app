import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('profile')
export class ProfileController {
  @UseGuards(AuthGuard('jwt'))
  @Get()
  profile(@Request() req: any) {
    return req.user;
  }
}
