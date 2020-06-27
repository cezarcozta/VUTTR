/* eslint-disable camelcase */
import { getRepository, Repository } from 'typeorm';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '@modules/users/infra/typeorm/entities/Users';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async createAndSave(userData: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(userData);

    await this.ormRepository.save(user);

    return user;
  }

  public async findUserByID(user_id: string): Promise<User | undefined> {
    try {
      const user = await this.ormRepository.findOne({
        where: { user_id },
      });

      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
export default UsersRepository;
