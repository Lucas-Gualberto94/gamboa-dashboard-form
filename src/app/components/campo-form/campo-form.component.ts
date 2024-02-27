import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-campo-form',
  standalone: true,
  imports: [MatCheckboxModule, FormsModule, MatInputModule, MatPaginatorModule, FormsModule, MatSelectModule, CommonModule],
  templateUrl: './campo-form.component.html',
  styleUrl: './campo-form.component.scss'
})
export class CampoFormComponent {

  checked = false;
  length = 0;
  mostrarCampoTexto = false;


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
}
