import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepo } from './user.repository';

@Module({
  controllers: [UserController],
  providers: [UserRepo],
})
export class UserModule {}
