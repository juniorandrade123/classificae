import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperarAcesso',
  templateUrl: './app-recuperarAcesso.component.html',
  styleUrls: ['./app-recuperarAcesso.component.scss']
})

export class RecuperarAcessoComponent implements OnInit {
 
  constructor(private router: Router) { }

  ngOnInit() {
    console.log('Component app-recuperarAcesso inciado...');
  }

  goVoltar() {
    this.router.navigate([
      '/login'
    ]);
  }

}