import { Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDto } from '../tasks/dto/auth-credentials.dto';
export declare class UserRepository extends Repository<User> {
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    private hashPassword;
}
