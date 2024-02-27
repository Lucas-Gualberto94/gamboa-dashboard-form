import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { TabelasComponent } from './pages/tabelas/tabelas.component';
import { OrcamentoComponent } from './pages/orcamento/orcamento.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';


export const routes: Routes = [
  { path:'', component:LoginComponent },
  { path:'dashboard', component:DashboardComponent, canActivate:[authGuard] },
  { path:'formulario', component:FormularioComponent, canActivate:[authGuard] },
  { path:'tabelas', component:TabelasComponent, canActivate:[authGuard] },
  { path:'orcamento', component:OrcamentoComponent, canActivate:[authGuard] }
];
