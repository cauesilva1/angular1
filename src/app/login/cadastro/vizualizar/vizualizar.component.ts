import { Component, OnInit } from '@angular/core';
import { Cadastro } from 'src/app/cadastro.model';
import { CadastroServiceService } from 'src/app/cadastro-service.service';

@Component({
  selector: 'app-cadastro-vizualizar',
  templateUrl: './vizualizar.component.html',
  styleUrls: ['./vizualizar.component.css']
})
export class VizualizarComponent implements OnInit {

  cadastros!: Cadastro[]
  displayedColumns = ['id', 'usuario', 'password', 'action'];

  constructor(private cadastroserviceservice: CadastroServiceService){ }

  ngOnInit(): void {
    this.cadastroserviceservice.read().subscribe(cadastros => {
      this.cadastros = cadastros
    })
  }
}
