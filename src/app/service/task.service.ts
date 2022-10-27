import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
//para poder hacer las peticiones al servidor:
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Task } from '../Task';


//esto es para poder mandar un json al srevidor y que este sepa como procesarlo
//lo agregamos en la funcion updateTaskReminder
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' :'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
private apiUrl = 'http://localhost:5000/tasks'
  constructor(
    //inicializamos el método http
    private http:HttpClient
  ) { }
//observable significa que es asincronico
//getTask hace un pedido GET a la lista de tareas
  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }

  //esta funcion asincronica (observable) recibe la tarea por parametro
  //en la variable url accede a nuestra api y luego al id de nuestra tarea seleccionada
  //retorna el metodo delete borrando la tarea especifica a traves de su id
  deleteTask(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }

  updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url, task, httpOptions)
  }
}
