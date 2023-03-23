import { Body, Controller, Post } from '@nestjs/common';
import { UserRepo } from './user.repository';

@Controller('/user')
export class UserController {
  private usuarioRepository = new UserRepo();
  @Post()
  async create(@Body() dataUser) {
    this.usuarioRepository.salvar(dataUser);
    return {
      message: 'User created',
      data: dataUser,
    };
  }
}
