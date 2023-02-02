import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './work/work.component';
import { CenzorComponent } from './work/cenzor/cenzor.component';
import { UserComponent } from './work/user/user.component';
import { TaskComponent } from './work/task/task.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'work', component: WorkComponent ,children:[
    {path:'cenzor', component:CenzorComponent},
    {path:'user', component: UserComponent},
    {path:'task', component: TaskComponent}
  ]},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
