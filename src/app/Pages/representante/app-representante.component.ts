import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-representante',
  templateUrl: './app-representante.component.html',
  styleUrls: ['./app-representante.component.scss']
})
export class RepresentanteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
      
  } 

  goVoltar() { 
    this.router.navigate([
      '/anuncie'
    ]);
  }

}