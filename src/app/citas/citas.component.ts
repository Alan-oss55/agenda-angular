import { Component, OnInit } from '@angular/core';
import { Cita } from './cita';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit{

  descripcion: string = ''
  fecha?: Date = new Date()

  citas: Cita[] = []

  	ngOnInit(): void {
        let getAll = localStorage.getItem('citas')
        this.citas = getAll ? JSON.parse(getAll) : []
    }

  nuevaCita(){
    if(this.descripcion.trim().length && this.fecha){
      let nuevaCita : Cita = {
        id: Date.now(),
        title : this.descripcion,
        date: this.fecha
      }

      this.citas.push(nuevaCita)
      this.descripcion = ''
      this.fecha = undefined
      localStorage.setItem('citas', JSON.stringify(this.citas))
    }
  }

  eliminar(index: number){
    this.citas.splice(index, 1)
    localStorage.setItem('citas', JSON.stringify(this.citas))
  }
}
