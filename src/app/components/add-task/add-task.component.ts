import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  //output para emitir el evento con la tarea capturada en la funcion onSubmit
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
text:string = "";
day:string = "";
reminder: boolean= false;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    //pequeña validacion que pide rellenar el campo agregar tarea
    if(this.text.length === 0){
      alert("Please add a task")
    }
    //usamos destructuracion
    //capturamos los valores de los inputs
    const {text, day, reminder} = this
    const newTask = {text, day, reminder}
    //emitimos el evento hacia el componente padre con la tarea nueva
    this.onAddTask.emit(newTask)
  }


}
