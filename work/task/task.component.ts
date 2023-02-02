import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './task/child/child.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{
  @ViewChild(ChildComponent) childTable!: ChildComponent;

  public user = 'Ivan Ivanov';
  public count = 0;
  public taskName!: string;
  public save = false;
  public pushName!: string;
  public getTask!: string;
  public index!: number;

  constructor() {}

  ngOnInit(): void {}

  addName(): void {
    this.taskName = this.pushName;
    this.pushName = '';
  }
  getName(index: number): void {
    this.save = true;
    this.getTask = this.childTable.taskList[index].name;
    this.index = index;
  }
  getlength(length: number) {
    this.count = length;
  }
  reName(): void {
    this.childTable.taskList[this.index].name = this.getTask;
    this.getTask = '';
    this.save = false;
  }
}
