import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  public login!:string;
  public password!:string;
  public email!:string;
  
    public users = {
      login:'',
      password:'',
      email:''
    }
    public userTable:any = [];
  public userIndex !:number;
  public editStatus = false;
  public loginCheckUp =  /^\w{4,16}$/i
  public passCheckUp = /^[a-z|0-9|\.|_|-]{4,16}$/i
  public emailCheckUp = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{1,5}/
  public messege = 'messegeOff'
  public loginInput = 'login '
  
    addUser(){
      
  let logChek = this.loginCheckUp.test(this.users.login)
  let passChek = this.passCheckUp.test(this.users.password)
  let emailChek  = this.emailCheckUp.test(this.users.email)
  
  if(logChek && passChek && emailChek){
    console.log('ok');
    this.userTable.push({login:this.users.login,
      password:this.users.password,
      email:this.users.email})
    this.users.login = '';
    this.users.password = '';
    this.users.email = '';
  }
  else if(this.loginCheckUp){
  
   this.messege = 'messegeOn' 
  }
  
  
  
  
    }
  
  delete(index:number){
  this.userTable.splice(index,1)
    }
  
  edite(index:number){
    console.log(this.users);
    
  this.users.login =  this.userTable[index].login;
  this.users.password = this.userTable[index].password;
  this.users.email = this.userTable[index].email;
  
    console.log(this.users);
  
  this.editStatus = true
  this.userIndex = index
  
  
  
  
    }
  
  saveEditUser(){
  this.editStatus = false
  this.userTable[this.userIndex].login = this.users.login
  this.userTable[this.userIndex].password = this.users.password
  this.userTable[this.userIndex].email = this.users.email
  this.users.login = '';
  this.users.password = '';
  this.users.email = '';
    }
}
