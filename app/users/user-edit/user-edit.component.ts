import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './app/users/user-edit/user-edit.component.html'
})
export class UserEditComponent implements OnInit {
  user: User;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private service: UserService, private route: ActivatedRoute) { }

  ngOnInit() { 
    // grab the user
    let id = this.route.snapshot.params['id'];
    this.service.getUser(id).subscribe(user => this.user = user);
  }

  /**
   * Update the user
   */
  updateUser() {
    this.successMessage = '';
    this.errorMessage   = '';

    this.service.updateUser(this.user)
      .subscribe(
        user => {
          this.successMessage = 'User was updated.';
          console.log('user was updated');
        },
        err => {
          this.errorMessage = err;
          console.error(err);
        }        
      );
  }


}