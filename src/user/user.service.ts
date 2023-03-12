import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  get() {
    return { name: 'Kavindu', email: 'kavindumadushanka972@gmail.com' };
  }

  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }

  update(updateUserDto: UpdateUserDto, userId: number) {
    return { body: updateUserDto, userId: userId };
  }

  user(userId: number) {
    return { userId: userId };
  }
}
