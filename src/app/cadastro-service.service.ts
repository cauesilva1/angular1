import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Cadastro } from './cadastro.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroServiceService {

  baseUrl =   "http://localhost:3001/users"

  
  constructor(private http: HttpClient) {
   }

  read(): Observable<Cadastro[]>{
    return this.http.get<Cadastro[]>(this.baseUrl)
  }
}

