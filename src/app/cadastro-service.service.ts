import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Cadastro } from './cadastro.model';
import { map, catchError} from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CadastroServiceService {

  
  baseUrl =   "http://localhost:3001/users"
  
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {
  }

  showMenssege(msg: string, isError: boolean = false) : void{
    this.snackBar.open(msg, 'x', {
      duration: 600,
      verticalPosition: 'top',
      panelClass: isError ? ['errorMsg'] : ['successmsg']
    })
  }
  
  create(cadastro: Cadastro): Observable<Cadastro>{
    return this.http.post<Cadastro>(this.baseUrl, cadastro)
  }

  errorMsg(e: any): Observable<any>{
    console.log(e);
    this.showMenssege('erro', true);
    return EMPTY
  }

   read(): Observable<Cadastro[]>{
     return this.http.get<Cadastro[]>(this.baseUrl)
  }
}

