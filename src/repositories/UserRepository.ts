import { AppDataSource } from '../data-source'
import { User } from '../entities/user'

export const UserRepository = AppDataSource.getRepository(User)

