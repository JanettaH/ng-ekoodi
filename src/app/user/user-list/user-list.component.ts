import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'ekoodi-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title: string;
  users: User[];
  @Output() userSelected: EventEmitter<User>;

  constructor() {
    this.title = 'User List';
    this.users = [];
    this.userSelected = new EventEmitter();
  }

  ngOnInit() {
    this.users = [
      new User('Maija', 'Hämäläinen'),
      new User('Pekka', 'Hämäläinen'),
      new User('Ville', 'Hämäläinen')
    ];
  }

    onUserSelect(user: User) {
      this.userSelected.emit(user);
      console.log(user);
    }

}

