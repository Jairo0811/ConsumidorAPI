import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ProyectoFinal20152984';
  users: any[] = [];

  constructor(protected userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (data) => {
      
        this.users = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
