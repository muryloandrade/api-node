export class UserRepo {
  private users = [];

  async salvar(user) {
    this.users.push(user);
    console.log(this.users);
  }
}
