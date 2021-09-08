import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RepositoryComponent } from './repository/repository.component';
// import { UserrepoComponent } from './userrepo/userrepo.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations:[
    AppComponent,
    UserComponent,
    RepositoryComponent,
    NavbarComponent
  ],
    
  
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
