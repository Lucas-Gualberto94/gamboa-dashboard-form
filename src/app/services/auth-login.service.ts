import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  private dataURL = 'assets/dados.json';
  private isAuthenticated: boolean = false;

  constructor( private httpClient:HttpClient) { }

  isLogged(email:string, password:string): Observable<boolean> {
    return this.httpClient.get<any[]>(this.dataURL).pipe(
        map(data => {
          const user = data.find(u => u.email === email && u.password === password);
          this.isAuthenticated = !!user;
         return this.isAuthenticated;
        }),
        catchError(()=> {
          this.isAuthenticated = false;
        return of(false);
        })
    );
}

getIsAuthenticated(): boolean {
  return this.isAuthenticated;
}

}



