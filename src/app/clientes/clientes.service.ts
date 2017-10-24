import { Injectable } from '@angular/core';

@Injectable()
export class ClientesService {

  constructor() { }

  getClientes(){
    return ['João', 'Pedro', 'Marilia'];
  }
}
