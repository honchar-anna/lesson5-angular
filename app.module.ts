import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkComponent } from './work/work.component';
import { CenzorComponent } from './work/cenzor/cenzor.component';
import { UserComponent } from './work/user/user.component';
import { TaskComponent } from './work/task/task.component';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './work/task/task/child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    CenzorComponent,
    UserComponent,
    TaskComponent,
    HomeComponent,
    ChildComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
