import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepo {
  private users = [];

  async salvar(user) {
    this.users.push(user);
  }

  async get() {
    return this.users;
  }
  async delete(email) {
    console.log(email.email);
    const user = this.users.filter((user) => user.email !== email.email);
    this.users = user;
    console.log(user);
    console.log(this.users);
  }
}
