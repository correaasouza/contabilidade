import { ClientesService } from './clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: string[];

  constructor(private clintesService : ClientesService) { 

    this.clientes = this.clintesService.getClientes();

  }

  ngOnInit() {
  }

}
