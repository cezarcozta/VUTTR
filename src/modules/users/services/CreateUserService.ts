import { injectable, inject } from 'tsyringe';

import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import IUsersRepository from '../repositories/IUsersRepository';
import User from '../infra/typeorm/entities/Users';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ name, email, password }: IRequest): Promise<User> {
    try {
      const checkUserExists = await this.usersRepository.findUserByEmail(email);

      if (checkUserExists) {
        throw new Error('Email address already used');
      }

      const hashedPassword = await this.hashProvider.generateHash(password);

      const user = await this.usersRepository.createAndSave({
        name,
        email,
        password: hashedPassword,
      });

      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default CreateUserService;
