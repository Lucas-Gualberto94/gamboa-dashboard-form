import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { TabelasComponent } from './pages/tabelas/tabelas.component';
import { OrcamentoComponent } from './pages/orcamento/orcamento.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';


export const routes: Routes = [
  { path:'', component:LoginComponent },
  { path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard] },
  { path:'formulario', component:FormularioComponent, canActivate:[AuthGuard] },
  { path:'tabelas', component:TabelasComponent, canActivate:[AuthGuard] },
  { path:'orcamento', component:OrcamentoComponent, canActivate:[AuthGuard] }
];
