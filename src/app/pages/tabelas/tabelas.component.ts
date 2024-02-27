import { Component, HostListener } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AdminNavbarComponent } from '../../components/admin-navbar/admin-navbar.component';

@Component({
  selector: 'app-tabelas',
  standalone: true,
  imports: [MatSidenavModule, SidebarComponent, AdminNavbarComponent],
  templateUrl: './tabelas.component.html',
  styleUrl: './tabelas.component.scss'
})
export class TabelasComponent {

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Verifica se a posição de rolagem é maior que um determinado valor
    this.isScrolled = window.scrollY > 50;
  }
}
