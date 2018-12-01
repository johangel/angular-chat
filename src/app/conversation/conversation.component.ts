import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';
import { User } from '../interfaces/Users';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {

  friendId: any;
  friends: User[];
  friend: User;
  price: number = 78.2313;
  today: any = Date.now();

  constructor(private activatedRoute: ActivatedRoute, private UserService: UsersService) {

    this.friendId = this.activatedRoute.snapshot.params['uid'];
    this.UserService.getUserById(this.friendId).valueChanges().subscribe(
      (response: User) =>{
        console.log(response)
        this.friend = response
      }),(error => {
        console.log(error)
      });
    
    // this.friend = this.friends.find(record => {
    //   return record.uid == this.friendId;
    // });
    console.log(this.friend);
  }

  ngOnInit() {
  }

}
