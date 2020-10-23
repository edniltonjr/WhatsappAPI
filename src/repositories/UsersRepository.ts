import { EntityRepository, Repository } from 'typeorm';
import User from '../models/User';

@EntityRepository(User)
class UsersRepository extends Repository<User> {
  public async findUsers(): Promise<User[]> {
    const getUsers = await this.find();
    return getUsers;
  }
}
export default UsersRepository;
