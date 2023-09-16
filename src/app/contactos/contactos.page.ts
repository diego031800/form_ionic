import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { last, map } from 'rxjs';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {

  contactos:any = [];
  edicionId: any = 0;
  is_hidden: boolean = false;
  nombres: any = '';
  apellidos: any = '';
  celular: any = '';
  email: any = '';

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.getContacts().subscribe(
      (data:any) => {
        this.contactos = data;
      }
    )
  }

  getContacts() {
    return this.http.get('assets/archivos/contactos.json').pipe(
      map((data: any) => {
        return data.data;
      })
    );
  }

  agregar() {
    let last_index = this.contactos.reduce((objetoIdMax:any, ObjetoAct:any) => {
      if (ObjetoAct.id > objetoIdMax.id) {
        return ObjetoAct;
      }
      return objetoIdMax;
    }, this.contactos[0]);
    if (last_index) {
      last_index = last_index.id;
    } else {
      last_index = 1;
    }
    let defaultContact = {
      id: last_index + 1,
      nombres: 'Nombres',
      apellidos: 'Apellidos',
      celular: 'celular',
      email: 'email',
      foto: 'assets/images/perfil3.jpg',
      estado: true,
    };

    this.contactos.unshift(defaultContact);
  }

  editar(id:number) {
    let contacto = this.contactos.find((e:any) => e.id === id);
    this.edicionId = id;
    this.nombres = contacto.nombres;
    this.apellidos = contacto.apellidos;
    this.celular = contacto.celular;
    this.email = contacto.email;
  }

  guardar(index:number) {
    this.contactos[index].nombres = this.nombres;
    this.contactos[index].apellidos = this.apellidos;
    this.contactos[index].celular = this.celular;
    this.contactos[index].email = this.email;
    this.edicionId = 0;
  }

  eliminar(index: number) {
    if (index >= 0) {
      this.contactos.splice(index, 1);
    }
  }
}
