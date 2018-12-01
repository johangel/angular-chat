import { User } from './../interfaces/Users';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
// import { User } from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Friends: User[];
  query: string = '';

  constructor(private UserService: UsersService) {
   UserService.getUsers().valueChanges().subscribe(
      (Response: User[])=>{
        // console.log(Response)
        this.Friends = Response;
        console.log(this.Friends)
      }, error=>{
        console.log(error)
      }
    );
  }
  
  ngOnInit() {
  }

}
