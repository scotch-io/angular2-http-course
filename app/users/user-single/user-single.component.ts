import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  templateUrl: './app/users/user-single/user-single.component.html'
})
export class UserSingleComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute, private service: UserService) {}

  ngOnInit() { 
    // grab the id from the url
    let id = this.route.snapshot.params['id'];

    // use the userservice to getUser()
    this.service.getUser(id)
      .subscribe(user => this.user = user);
  }

}