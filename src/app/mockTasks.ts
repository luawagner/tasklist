import {Task} from './Task'
//TASK sera un array(instancia) de clase Task, como la definimos en el archivo Task.ts
//con la interfaz Task nos aseguramos de que haya consistencia en los datos y evitamos errores en su ingreso.
export const TASKS: Task[] = [
  {
    id: 1,
    text: "Terminar primer modulo angular",
    day: "Agosto 5 a las 12:00",
    reminder: true
  },
  {
    id: 2,
    text: "Hacer las compras",
    day: "Agosto 5 a las 17:00",
    reminder: true
  },
  {
    id: 3,
    text: "Leer mi libro favorito",
    day: "Agosto 5 a las 19:00",
    reminder: false
  },
  {
    id: 4,
    text: "Investigar sobre Bootstrap",
    day: "Agosto 5 a las 10:00",
    reminder: false
  }
]
