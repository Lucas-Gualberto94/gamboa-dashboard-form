import { Component, OnInit } from '@angular/core';
import { SharedInfoFormService } from '../../services/shared-info-form.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card-profile',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './card-profile.component.html',
  styleUrl: './card-profile.component.scss'
})
export class CardProfileComponent implements OnInit {
  clienteAtual: any;
  checked: boolean = false;

  constructor(private sharedInfoFormService: SharedInfoFormService) {}

  ngOnInit() {
    this.sharedInfoFormService.obterClienteAtual().subscribe((clienteAtual) => {
      this.clienteAtual = clienteAtual;
    });

    this.sharedInfoFormService.obterChecked().subscribe((checked) => {
      this.checked = checked;
    });
  }
}
