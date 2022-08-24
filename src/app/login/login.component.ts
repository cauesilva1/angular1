import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Nome = document.getElementById('#Nome')!;
  Senha = document.getElementById('#Senha')!;
  email = document.getElementById('#email')!;

  enviar(){
          alert ("cadastro concluido com sucesso")
  }
}
