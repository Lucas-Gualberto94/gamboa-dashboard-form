import { ChangeDetectorRef, Component, HostListener, ViewChild } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { AdminNavbarComponent } from '../../components/admin-navbar/admin-navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-orcamento',
  standalone: true,
  imports: [
    MatSidenavModule,
    SidebarComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AdminNavbarComponent
  ],
  templateUrl: './orcamento.component.html',
  styleUrl: './orcamento.component.scss'
})
export class OrcamentoComponent {
  @ViewChild('snav') snav!: MatSidenav;

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Verifica se a posição de rolagem é maior que um determinado valor
    this.isScrolled = window.scrollY > 50;
  }

  constructor(private media: MediaMatcher, private changeDetectorRef: ChangeDetectorRef) {
  }


  toggleSidebar(): void {

      this.snav.toggle();
  }
}
