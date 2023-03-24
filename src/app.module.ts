import { Module } from '@nestjs/common';
import { UsuarioModule } from './users/user.module';

@Module({
  imports: [UsuarioModule],
})
export class AppModule {}
