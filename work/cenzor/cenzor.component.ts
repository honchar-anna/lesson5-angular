import { Component } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.css']
})
export class CenzorComponent {
  public h2 = 'title';
  public badWordsForm = 'badWordsForm';
  public badTitle = 'badTitle';
  public badContent = 'badContent';
  public inputBadContent = 'inputBadContent';
  public addBadContent = 'addBadContent';
  public resetBadContent = 'resetBadContent';
  public inputText= 'inputText';
  public badWords = ['java','tottenham'];
  public badContenNew= this.badWords;
public cenzor = "cenzor";
 public badWord ='';
public textForCheckUp = '';

constructor(){}

ngOnInit():void{}

badValue(){


 if(!this.badWord ){

  this.inputBadContent = 'inputBadContent red';
 }
 else{
  this.inputBadContent = 'inputBadContent ';
  this.badWords.push(this.badWord);
 console.log(this.badWords);
 this.badWord ='';
 }
}
resetBadValue(){
  this.badWords = [];
this.badContenNew= this.badWords;

}
checkUpText(){
  if(!this.textForCheckUp){
    this.textForCheckUp = 'Please write text!';
    this.inputText= 'inputText red';
  }
  else{
    for(let j=0;j<this.badWords.length;j++){
      this.textForCheckUp = this.textForCheckUp.replace(this.badWords[j], '*'.repeat(this.badWords[j].length))
      console.log(this.textForCheckUp);
      
    }
  }

}
}
