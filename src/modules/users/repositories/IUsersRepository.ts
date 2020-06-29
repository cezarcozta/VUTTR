import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

import User from '../infra/typeorm/entities/Users';

export default interface IUsersRepository {
  createAndSave(data: ICreateUserDTO): Promise<User>;

  findUserByID(id: string): Promise<User | undefined>;

  findUserByEmail(email: string): Promise<User | undefined>;
}
