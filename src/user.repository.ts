export class UserRepo {
  private users = [];

  async salvar(user) {
    this.users.push(user);
  }

  async get() {
    return this.users;
  }
}
