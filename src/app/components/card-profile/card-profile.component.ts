import { Component, OnInit } from '@angular/core';
import { SharedInfoFormService } from '../../services/shared-info-form.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-profile.component.html',
  styleUrl: './card-profile.component.scss'
})
export class CardProfileComponent implements OnInit {
  clienteAtual: any;

  constructor(private sharedInfoFormService: SharedInfoFormService) {}

  ngOnInit() {
    this.sharedInfoFormService.obterClienteAtual().subscribe((clienteAtual) => {
      this.clienteAtual = clienteAtual;
      console.log('Dados do cliente recebidos no componente irmão:', this.clienteAtual);
    });
  }
}
