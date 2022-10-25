import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mikis:11273032..@127.0.0.1:27017/water'),
    UserModule,
  ],
})
export class AppModule {}
