import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastroFaturamento',
  templateUrl: './app-cadastroFaturamento.component.html',
  styleUrls: ['./app-cadastroFaturamento.component.scss']
})
export class CadastroFaturamentoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
      
  } 

  goVoltar() {
    this.router.navigate([
      '/login'
    ]);
  }
}