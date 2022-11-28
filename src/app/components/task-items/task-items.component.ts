import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.css']
})
export class TaskItemsComponent {

  @Input() task?: Task;
  faTimes = faTimes;

  @Output() onCallDelTask: EventEmitter<Task> = new EventEmitter();
  @Output() onCallToggleReminder: EventEmitter<Task> = new EventEmitter();

  constructor() { }
  callDel(task: any) {

    this.onCallDelTask.emit(task);
    console.log("callDel");
    
  }

  callToggle(task: any) {
    this.onCallToggleReminder.emit(task);
    console.log("callToggle");
    
  }


}
