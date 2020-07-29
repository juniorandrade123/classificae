import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anunciante',
  templateUrl: './app-anunciante.component.html',
  styleUrls: ['./app-anunciante.component.scss']
})
export class AnuncianteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
      
  } 

  goVoltar() {
    this.router.navigate([
      '/login'
    ]);
  }
}