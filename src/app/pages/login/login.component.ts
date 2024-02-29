import { Component, ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthLoginService } from '../../services/auth-login.service';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ErrorDialogComponent } from '../../components/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {MatMenuTrigger, MatMenuModule} from '@angular/material/menu';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatButtonModule, MatIconModule, ErrorDialogComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  hide = true;

  @ViewChild('menuTrigger')
  menuTrigger!: MatMenuTrigger;

  constructor(private authLoginService: AuthLoginService, private router: Router, public dialog: MatDialog) {}

  onSubmit() {
    this.authLoginService.isLogged(this.email, this.password).subscribe(isAuthenticated => {
      if (isAuthenticated) {
        console.log("Authenticado")
        this.router.navigate(['/dashboard']);
      } else {
        console.log('não autenticado')
        this.openDialog();
      }
    });
  }


  openDialog() {
    this.dialog.open(ErrorDialogComponent, {restoreFocus: false});
  }
}
