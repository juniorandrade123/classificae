import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})

export class LoginComponent implements OnInit {
 
  constructor(private router: Router) { }

  ngOnInit() {
    console.log('Component app-login inciado...');
  }

  goVoltar() {
    this.router.navigate([
      '/'
    ]);
  }

  goRecuperarAcesso() {
    this.router.navigate([
      '/recuperarAcesso'
    ]);
  }

  goCadastro() {
    this.router.navigate([
      '/cadastroEmpresa'
    ]);
  }
  
}
