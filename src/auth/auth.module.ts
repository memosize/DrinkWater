import { UserService } from './../users/user.service';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

@Module({
  imports: [UserService],
  providers: [AuthService],
})
export class AuthModule {}
