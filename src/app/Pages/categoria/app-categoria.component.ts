import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './app-categoria.component.html',
  styleUrls: ['./app-categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {

  }

}
