import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  templateUrl: './app/users/user-create/user-create.component.html'
})
export class UserCreateComponent implements OnInit {
  user: User = { name: '', username: '', avatar: '' };
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
  }

  /**
   * Create a user
   */
  createUser() {
    this.successMessage = '';
    this.errorMessage   = '';

    this.service.createUser(this.user)
      .subscribe(user => {
        this.successMessage = 'User was created!';
        console.log('user was created');

        // navigate back to the users page
        this.router.navigate(['/users']);
      })
  }

}