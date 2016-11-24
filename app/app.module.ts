import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { AppComponent } from './app.component';

import { UserService } from './shared/services/user.service';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserSingleComponent } from './users/user-single/user-single.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/services/auth.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [ 
    AppComponent,
    UsersComponent,
    UserListComponent,
    UserSingleComponent,
    UserEditComponent,
    UserCreateComponent,
    LoginComponent
  ],
  providers: [
    UserService,
    AuthService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}