/* eslint-disable camelcase */
import UserToken from '../infra/typeorm/entities/UserTokens';

export default interface IUserTokensRepository {
  generate(user_id: string): Promise<UserToken>;

  findByToken(token: string): Promise<UserToken | undefined>;
}
