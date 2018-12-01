import { Injectable } from '@angular/core';
import { User } from '../interfaces/Users';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private AngularFireDatabase: AngularFireDatabase) {
  
  } 

  getUsers() {
    return this.AngularFireDatabase.list('/users');
  }

  getUserById(uid){
    return this.AngularFireDatabase.object('/users/' + uid);
  }

  createUser(user){
    return this.AngularFireDatabase.object('/users/' + user.uid).set(user);
  }

  editUser(user) {
    return this.AngularFireDatabase.object('/users/' + user.uid).set(user);
  }

}
