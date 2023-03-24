import { Module } from '@nestjs/common';
import { UsuarioController } from './user.controller';
import { UsuarioRepository } from './user.repository';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioRepository],
})
export class UsuarioModule {}
