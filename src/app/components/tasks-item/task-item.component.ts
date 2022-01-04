import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Task } from 'src/app/Task';
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task?: Task;
  @Output() onDeleteTask : EventEmitter<Task> = new EventEmitter();
  @Output() onEditTask : EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder : EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  faPencil = faPencilAlt;
  editable: boolean = false;

  constructor() { 
  }

  ngOnInit(): void {
  }

  onDelete(task: Task){
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task){
    this.onToggleReminder.emit(task);
      
    console.log("ASDASDASDASD")
  }

  canEdit(task: Task, text: string, day: string){  
    task.text = text;
    task.day = day;
    
    this.editable = !this.editable;
    if (!this.editable){
        this.onEditTask.emit(task)
    }
  }

}
