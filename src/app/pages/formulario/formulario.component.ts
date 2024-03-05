import { Component, HostListener,  ChangeDetectorRef, ViewChild } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { CardProfileComponent } from '../../components/card-profile/card-profile.component';
import { CampoFormComponent } from '../../components/campo-form/campo-form.component';
import { AdminNavbarComponent } from '../../components/admin-navbar/admin-navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MediaMatcher} from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    MatSidenavModule,
    SidebarComponent,
    CampoFormComponent,
    CardProfileComponent,
    AdminNavbarComponent,
    MatToolbarModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {


  dataToPass: any;



  @ViewChild('snav') snav!: MatSidenav;

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Verifica se a posição de rolagem é maior que um determinado valor
    this.isScrolled = window.scrollY > 50;
  }


  constructor(private media: MediaMatcher, private changeDetectorRef: ChangeDetectorRef) { }


  toggleSidebar(): void {
      this.snav.toggle();
    }

}
