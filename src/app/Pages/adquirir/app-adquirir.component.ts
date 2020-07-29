import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adquirir',
  templateUrl: './app-adquirir.component.html',
  styleUrls: ['./app-adquirir.component.scss']
})
export class AdquirirComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
      
  } 

  goVoltar() {
    this.router.navigate([
      '/anuncie'
    ]);
  }

}