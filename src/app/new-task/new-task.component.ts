import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import {FormsModule} from '@angular/forms'
import { empty, from } from 'rxjs';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

MyArray

constructor(public taskService: TaskService) { 
  this.MyArray = this.taskService.chuma()
  }

  ngOnInit() {
  }

addTasks(taskName, taskPrio, Date){
  this.taskService.addTasks(taskName, taskPrio, Date) 
}

Delete(task){
   this.taskService.Delete(task)
  // this.tasks= this.taskService.Delete(task)
 }
  }
