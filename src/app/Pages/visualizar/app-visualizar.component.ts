import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-visualizar',
  templateUrl: './app-visualizar.component.html',
  styleUrls: ['./app-visualizar.component.scss']
})

export class VisualizarComponent implements OnInit {

  company = JSON.parse(localStorage.getItem('company'));

  constructor(private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  goVoltar() {
    this.router.navigate([
      '/'
    ]);
  }

  getSafeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.company.address.map);
  }


}
