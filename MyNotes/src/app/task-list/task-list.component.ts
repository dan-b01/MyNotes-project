import { Component } from '@angular/core';
import { Task } from './task/task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  newTaskName:string = "";
  maxId:number = 1 ;
  taskList:Task[] = [{isDone:false, taskName:"teste1", id:0}, {isDone:true, taskName:"teste2", id:1}]


  setNewTaskName(e:any) {
    e = (e.target);
    this.newTaskName = (<HTMLInputElement> e).value;
  }

  addTask() {
    if(this.newTaskName != "") {
      this.maxId++;
      this.taskList.push({isDone:false, taskName:this.newTaskName, id:this.maxId});
    } else {
      alert('nome vazio!');
    }
    this.newTaskName = "";
  }

  removeTask(e:any) {

    var i = this.taskList.findIndex(el => el.id==e);
    
    this.taskList.forEach((task, index) => {
      if(task.id==i) this.taskList.splice(index,1);
    });

    this.maxId--;
  }

}
