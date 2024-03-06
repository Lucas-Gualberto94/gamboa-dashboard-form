import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedInfoFormService {

  private clienteAtualSubject = new Subject<any>();
  private checkedSubject = new BehaviorSubject<boolean>(false);

  enviarClienteAtual(clienteAtual: any) {
    this.clienteAtualSubject.next(clienteAtual);
  }

  obterClienteAtual() {
    return this.clienteAtualSubject.asObservable();
  }


  obterChecked() {
    return this.checkedSubject.asObservable();
  }

  definirChecked(checked: boolean) {
    this.checkedSubject.next(checked);
  }
}
