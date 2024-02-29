import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';

interface Demanda {
  titulo: string;
  descricao: string;
  horasFrontEnd: string;
  horasBackEnd: string;
}


interface ClienteInfo {
  nome: string;
  email: string;
  endereco: string;
  cep: number;
  telefone: number;
}

@Component({
  selector: 'app-campo-form',
  standalone: true,
  imports: [MatCheckboxModule, FormsModule, MatInputModule, MatPaginatorModule, FormsModule, MatSelectModule, CommonModule],
  templateUrl: './campo-form.component.html',
  styleUrl: './campo-form.component.scss'
})
export class CampoFormComponent {

  @Output() sendData = new EventEmitter<any>();

  sendDataToSibling() {
    this.sendData.emit({ message: 'Hello from Component A' });
  }

  checked = false;
  length = 0;
  mostrarCampoTexto = false;

  demandas: Demanda[] = [];

  demandaAtual: Demanda = {
    titulo: '',
    descricao: '',
    horasFrontEnd: '',
    horasBackEnd: ''
  };

  clientes: ClienteInfo[] = [];

  clienteAtual: ClienteInfo = {
    nome: '',
    email: '',
    endereco: '',
    cep: 0,
    telefone: 0
  };

  @ViewChild('descricaoInput')
  descricaoInput!: ElementRef;


  toggleCampoTexto() {
    this.mostrarCampoTexto = !this.mostrarCampoTexto;
    if (this.mostrarCampoTexto) {
      setTimeout(() => {
        this.descricaoInput.nativeElement.focus();
      });
    }
  };

  ngAfterViewInit() {
    if (this.mostrarCampoTexto) {
      this.descricaoInput.nativeElement.focus();
    }
  }

  adicionarDemanda() {
    // Salvar os dados da demanda atual no array de demandas
    this.demandas.push({ ...this.demandaAtual });

    // Ressetar os valores dos campos para placeholders
    this.demandaAtual = {
      titulo: '',
      descricao: '',
      horasFrontEnd: '',
      horasBackEnd: ''
    };

    console.log(this.demandas);
  }


  adicionarInfoCliente() {
    this.clientes.push({ ...this.clienteAtual });

    this.clienteAtual = {
      nome: '',
      email: '',
      endereco: '',
      cep: 0,
      telefone: 0
    };

    console.log(this.clientes);
  }
}
