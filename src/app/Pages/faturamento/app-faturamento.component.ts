import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faturamento',
  templateUrl: './app-faturamento.component.html',
  styleUrls: ['./app-faturamento.component.scss']
})
export class FaturamentoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
      
  } 

  goVoltar() {
    this.router.navigate([
      '/login'
    ]);
  }
}