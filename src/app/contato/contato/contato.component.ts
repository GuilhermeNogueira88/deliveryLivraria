import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../share/contato.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
listacontatos: Observable<any[]>;
// listacontatos: {};
contatos: {};

  constructor(private contatoService: ContatoService ) { }

  // ngOnInit() {
  //   // this.contatos = this.contatoService.getAll();
  //   const subscribe = this.contatoService.getAll().subscribe( (dados:any) =>{
  //     this.contatos = dados;
  //     const total = dados.length;
  //     for(var i=0; i < total; i++) {
  //       console.log(dados[i].key);
  //       const dsubscribe = this.contatoService.getByKey(dados[i].key).subscribe( (dado:any) =>{
  //         dsubscribe.unsubscribe;
  //         console.log(dado.key.texto);
  //         // this.listacontatos = {
  //         //   mensagem: dado.texto,
  //         // }
  //       });
  //     }
  //     console.log(this.contatos);
  //     //console.log(dados[total].key);
  //   });

  //   // console.log(this.contatos);
  // }

  ngOnInit() {
    // this.listacontatos = this.contatoService.getAll();
      const subscribe = this.contatoService.getAll().subscribe( (dados:any) =>{
          this.contatos = dados;
      });

  }

  remover(key: string, filePath: string) {
    this.contatoService.remove(key, filePath);
  }

}
