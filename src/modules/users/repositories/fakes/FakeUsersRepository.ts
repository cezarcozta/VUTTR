import { uuid } from 'uuidv4';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

import User from '../../infra/typeorm/entities/Users';

class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async createAndSave(userData: ICreateUserDTO): Promise<User> {
    try {
      const user = new User();

      Object.assign(user, { id: uuid() }, userData);

      this.users.push(user);

      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async findUserByID(id: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.id === id);

    return findUser;
  }

  public async findUserByEmail(email: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.email === email);

    return findUser;
  }

  // public async update(user: User): Promise<User> {
  //   const findIndex = this.users.findIndex(find => find.id === user.id);

  //   this.users[findIndex] = user;

  //   return user;
  // }
}

export default FakeUsersRepository;
