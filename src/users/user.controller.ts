import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepo } from './user.repository';

@Controller('/user')
export class UserController {
  constructor(private usuarioRepository: UserRepo) {}
  @Post()
  async create(@Body() dataUser) {
    this.usuarioRepository.salvar(dataUser);
    return {
      message: 'User created',
      data: dataUser,
    };
  }
  @Get()
  async get() {
    return this.usuarioRepository.get();
  }
}
