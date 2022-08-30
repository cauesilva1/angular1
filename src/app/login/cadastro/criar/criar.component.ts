import { Component, OnInit } from '@angular/core';
import { CadastroServiceService } from 'src/app/cadastro-service.service';
import { Router } from '@angular/router';
import { Cadastro } from 'src/app/cadastro.model';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent implements OnInit {

  cadastro: Cadastro = {
    usuario: " ",
    password: " "
  }



  constructor(private cadastroservice: CadastroServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  createCadastro(): void{
    this.cadastroservice.create(this.cadastro).subscribe(() => {
    this.cadastroservice.showMenssege( 'usuario Cadastrado')
    })
  }
}