import { Component, HostListener } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CardProfileComponent } from '../../components/card-profile/card-profile.component';
import { CampoFormComponent } from '../../components/campo-form/campo-form.component';
import { AdminNavbarComponent } from '../../components/admin-navbar/admin-navbar.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    MatSidenavModule,
    SidebarComponent,
    CampoFormComponent,
    CardProfileComponent,
    AdminNavbarComponent
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Verifica se a posição de rolagem é maior que um determinado valor
    this.isScrolled = window.scrollY > 50;
  }
}
