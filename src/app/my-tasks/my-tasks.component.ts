import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css']
})
export class MyTasksComponent implements OnInit {

  MyArray
  constructor(public taskService: TaskService) {
    this.MyArray = this.taskService.getTask()
    }
   

  ngOnInit() {
  }

  Delete(task){
this.taskService.Delete(task)
}
}
