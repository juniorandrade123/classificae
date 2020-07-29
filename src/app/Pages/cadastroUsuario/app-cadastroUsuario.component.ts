import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastroUsuario',
  templateUrl: './app-cadastroUsuario.component.html',
  styleUrls: ['./app-cadastroUsuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
      
  } 

  goVoltar() {
    this.router.navigate([
      '/login'
    ]);
  }
}