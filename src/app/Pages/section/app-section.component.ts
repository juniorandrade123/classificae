import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SectionService } from './section.service';

@Component({
  selector: 'app-section',
  templateUrl: './app-section.component.html',
  styleUrls: ['./app-section.component.scss']
})

export class SectionComponent implements OnInit {

  listCompanys: [] = [];

  constructor(private router: Router, private service: SectionService) { }

  ngOnInit() {
    this.getCompanys();
  }

  goEmpresa(company: any) {
    localStorage.setItem('company', JSON.stringify(company));
    this.router.navigate([
      '/visualizar'
    ]);
  }

  getCompanys() {
    this.service.companys().subscribe(
      node => {
        this.listCompanys = node.company;
      },
      err => {
        console.error(err);
      }
    )
  }

}

