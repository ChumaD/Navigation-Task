import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';

const routes: Routes = [{
  path: 'myTasks', component: MyTasksComponent},
  {path: 'newTask', component: NewTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
