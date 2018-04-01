import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {


  menu:any= [
    {
      titulo: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu:[
        {tituli: 'Dashboard', url:'/dashboard'},
        {tituli: 'Progress', url:'/progress'},
        {tituli: 'Graficas', url:'/grafica'}

      ]
    }
  ]

  constructor() { }

}
