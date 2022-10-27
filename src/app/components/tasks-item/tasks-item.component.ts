import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TASKS } from 'src/app/mockTasks';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
@Input() task: Task = TASKS[0];
//le pasa al componente padre la tarea capturada con el evento
//output emite la informacion hacia el exterior del componente
@Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
//le avisa(Task.component) al padre que queremos cambiar el reminder
@Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()

faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }
onDelete(task: Task){
  this.onDeleteTask.emit(task)
}
onToggle(task:Task){
  this.onToggleReminder.emit(task)
}
}
