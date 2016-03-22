import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
  <div class="task-form">
    <br>
    <h3>Create Task:</h3>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
    <select #newPriority>
      <option value="low" selected="selected">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
    <button (click)="addTask(newDescription, newPriority)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement, userPriority: HTMLInputElement){
    this.onSubmitNewTask.emit([userDescription.value, userPriority.value]);
    // this.onSubmitNewTask.emit(userPriority.value);
    userDescription.value = "";
  }
}
