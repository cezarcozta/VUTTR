/* eslint-disable camelcase */
import { getRepository, Repository } from 'typeorm';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';

import UsersTokens from '../entities/UserTokens';

class UsersTokensRepository implements IUserTokensRepository {
  private ormRepository: Repository<UsersTokens>;

  constructor() {
    this.ormRepository = getRepository(UsersTokens);
  }

  public async findByToken(token: string): Promise<UsersTokens | undefined> {
    try {
      const userToken = await this.ormRepository.findOne({
        where: { token },
      });

      return userToken;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async generate(user_id: string): Promise<UsersTokens> {
    try {
      const userToken = this.ormRepository.create({
        user_id,
      });

      await this.ormRepository.save(userToken);

      return userToken;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default UsersTokensRepository;
