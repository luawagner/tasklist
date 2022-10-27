import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];


  constructor(
    private taskService: TaskService
  ) { }

  //ngOnInit representa el momento de montaje del componente
  ngOnInit(): void {
    //Esto es como una promesa asincronica, se suscribe a los observables
    this.taskService.getTasks().subscribe((tasks)=>{
      this.tasks = tasks
    })
  } //cuando se monta el componente llama al servicio y guarda la lista de tareas dentro de la variable tasks,
  //que contiene un array vacío hasta el momento.


  //esta funcion recibe la tarea por parametro de tipo Task
  //llama al servicio de nuestra DB (task.service) y ejecuta la funcion deleteTask, pasandole la tarea
  //luego edita la lista de tareas, mostrando solo aquellas que tienen un id diferente de la tarea borrada
  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(()=>{
      this.tasks = this.tasks.filter( t => t.id !== task.id)
    })
  }

  toggleReminder(task:Task){
    task.reminder = !task.reminder
    //asi cambiamos el estado de true a false y viceversa, negando la clase asignada.
  //esto solo cambia en la clase del front, no en la base de datos
    this.taskService.updateTaskReminder(task).subscribe()
  //una vez que tenemos ese valor modificado se lo pasamos al servicio para que lo modifique
  //en la base de datos
  }
}
