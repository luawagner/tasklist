import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  //le paso la variable text al componente button, el parámetro lo recibe desde el componente header(padre).
@Input() text: string="";
//también le puedo pasar un estilo dentro de una variable, lo recibe el componente button desde el header, su padre.
@Input() color: string="";
//emito el evento de click del button y se lo paso del button al padre para que este decida su comportamiento
@Output() btnClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
//le pasamos la funcion del evento click
  onClick(){
    this.btnClick.emit()
  }
}
