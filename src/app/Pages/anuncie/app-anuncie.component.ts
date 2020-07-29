import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anuncie',
  templateUrl: './app-anuncie.component.html',
  styleUrls: ['./app-anuncie.component.scss']
})
export class AnuncieComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
      
  } 

  goPlanos () {
    this.router.navigate([
      '/adquirir'
    ]);
  }

  goRepresentante () {
    this.router.navigate([
      '/representante'
    ]);
  }


}