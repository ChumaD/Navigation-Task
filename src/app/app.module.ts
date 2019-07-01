import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import {FormsModule} from '@angular/forms'
import {MatButtonModule, MatCheckboxModule,MatCardModule,MatInputModule,MatFormFieldModule,MatSelectModule,MatIconModule,MatListModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MyTasksComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }