import { Component, HostListener, OnDestroy, ChangeDetectorRef, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { AdminNavbarComponent } from '../../components/admin-navbar/admin-navbar.component';
import { MatButtonModule } from '@angular/material/button';
import {MediaMatcher} from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatSidenavModule,
    SidebarComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AdminNavbarComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  @ViewChild('snav') snav!: MatSidenav;


  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Verifica se a posição de rolagem é maior que um determinado valor
    this.isScrolled = window.scrollY > 50;
  }

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(private media: MediaMatcher, private changeDetectorRef: ChangeDetectorRef) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  toggleSidebar(): void {
    if (this.mobileQuery.matches) {
      // Apenas fecha o sidebar quando a tela é menor ou igual a 600px
      this.snav.toggle();
    }
  }
}
