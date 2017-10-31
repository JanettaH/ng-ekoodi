import {Injectable} from '@angular/core';
import {User} from './user';

@Injectable()
export class UserService {

  private users: User[];

  constructor() {
    this.users = [
      new User('Maija', 'Hämäläinen'),
      new User('Pekka', 'Hämäläinen'),
      new User('Ville', 'Hämäläinen')
    ];
  }

  getUsers(): User [] {
    return this.users;
  }
}
