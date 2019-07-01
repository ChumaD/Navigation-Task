import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  myTask =[];
  
  
  constructor(public taskServices: TaskService) { }
  
  getTask(){
    
   return this.myTask   
  }
  Delete(task){
    let index = this.myTask.indexOf(task);
    this.myTask.splice(index,1);
    
  }

  
 addTasks(taskName, taskPrio, Date){

  this.myTask.push({
  TaskName:taskName,  
  TaskPriority:taskPrio,
  taskDate:Date})

  alert ('New task has been added to My tasks');
  // this.empty=false
  // this.newTask=null
  // this.priority=null
  // this.newdate=null
  }

  chuma() {
    return this.myTask
  }
}
