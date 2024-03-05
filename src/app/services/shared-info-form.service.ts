import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedInfoFormService {

  private clienteAtualSubject = new Subject<any>();

  enviarClienteAtual(clienteAtual: any) {
    this.clienteAtualSubject.next(clienteAtual);
  }

  obterClienteAtual() {
    return this.clienteAtualSubject.asObservable();
  }
}
