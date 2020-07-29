import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('Component app-header inciado...');
  }

  goAnuncie() {
    this.router.navigate([
      '/anuncie'
    ]);
  }

  goLogin() {
    this.router.navigate([
      '/login'
    ]);
  }
}