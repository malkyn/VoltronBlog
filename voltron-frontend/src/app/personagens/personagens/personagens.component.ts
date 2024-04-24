import { Component, OnInit } from '@angular/core';
import { Personagem } from 'src/app/Models/Personagem';
import { ServiceResponse } from 'src/app/Models/ServiceResponse';
import { PersonagemService } from './personagem.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})
export class PersonagensComponent implements OnInit {

  public personagem: ServiceResponse<Personagem[]> | undefined
  personagens: Personagem[] | undefined = [] ;
  descricao!:  string | null
  imagem!: string | null
  constructor(private personagemService: PersonagemService) { }


  ngOnInit() {
    this.carregarPersonagens();
  }


  carregarPersonagens() {
    this.personagemService.getAll().subscribe(
      (response: ServiceResponse<Personagem[]>) => {
        if (response.sucesso) {
          this.personagens = response.dados;
          console.log(this.personagens);
        } else {
          console.error('Erro ao obter personagens:', response.mensagem);
          this.personagens = [];
        }
      },
      (error) => {
        console.error('Erro ao obter personagens:', error);
      }
    );
  }


}
