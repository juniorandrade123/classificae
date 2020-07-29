import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastroEmpresa',
  templateUrl: './app-cadastroEmpresa.component.html',
  styleUrls: ['./app-cadastroEmpresa.component.scss']
})
export class CadastroEmpresaComponent implements OnInit {
  
  public isCollapsedEmpresa = true;
  public isCollapsedEndereco = true;
  public isCollapsedRedeSocial = true;
  public isCollapsedDescricao = true;
  public isCollapsedImagem = true;
  
  constructor(private router: Router) { }

  ngOnInit() {
      
  } 

  goVoltar() {
    this.router.navigate([
      '/'
    ]);
  }

}


// export class NgbdCollapseBasic {
//   public isCollapsed = false;
// }