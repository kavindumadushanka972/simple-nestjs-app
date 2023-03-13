import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';
import { PaginationResponseDto } from 'src/Global/pagination-response.dto';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async getDataWithPagination(page: number, pageSize: number): Promise<PaginationResponseDto<User>> {
    const [data, total] = await this.userRepository.findAndCount({
      take: pageSize,
      skip: (page -1) * pageSize
    })

    return {
      data,
      total,
      page,
      pageSize,
    };
  }

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  update(updateUserDto: UpdateUserDto, userId: number) {
    return this.userRepository.update(userId, updateUserDto);
  }

  user(userId: number): Promise<User> {
    return this.userRepository.findOne({where: {id: userId}});
  }

  findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({where: {email: email}})
  }

  delete(userId: number) {
    return this.userRepository.delete(userId);
  }
}
