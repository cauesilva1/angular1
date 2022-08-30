import { Component, OnInit } from '@angular/core';
import { CriarComponent } from './cadastro/criar/criar.component';
import { CadastroServiceService } from '../cadastro-service.service';
import { Cadastro } from '../cadastro.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  cadastro: Cadastro = {
    usuario: '',
    password:' '  
  }

  constructor(private cadastroservice: CadastroServiceService) { }

  ngOnInit(): void {
  }
  Usuario = document.getElementById('#Nome')!;
  Senha = document.getElementById('#Senha')!;

  createCadastro(): void{
    this.cadastroservice.create(this.cadastro).subscribe(() => {
    this.cadastroservice.showMenssege( 'usuario Cadastrado')
    })
  }
}
