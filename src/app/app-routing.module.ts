import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './Pages/content/app-content.component';
import { AnuncieComponent } from './Pages/anuncie/app-anuncie.component';
import { AnuncianteComponent } from './Pages/anunciante/app-anunciante.component';
import { AdquirirComponent } from './Pages/adquirir/app-adquirir.component';
import { CadastroEmpresaComponent } from './Pages/cadastroEmpresa/app-cadastroEmpresa.component';
import { CadastroUsuarioComponent } from './Pages/cadastroUsuario/app-cadastroUsuario.component';
import { CadastroFaturamentoComponent } from './Pages/cadastrofaturamento/app-cadastrofaturamento.component';
import { FaturamentoComponent } from './Pages/faturamento/app-faturamento.component';
import { LoginComponent } from './Pages/login/app-login.component';
import { RecuperarAcessoComponent } from './Pages/recuperarAcesso/app-recuperarAcesso.component';
import { RepresentanteComponent } from './Pages/representante/app-representante.component';
import { SectionComponent } from './Pages/section/app-section.component';
import { VisualizarComponent } from './Pages/visualizar/app-visualizar.component';

const routes: Routes = [
  { path: '', component:  SectionComponent },
  { path: 'anuncie', component:  AnuncieComponent },
  { path: 'adquirir', component: AdquirirComponent },
  { path: 'anunciante', component: AnuncianteComponent },
  { path: 'cadastroEmpresa', component: CadastroEmpresaComponent },
  { path: 'cadastroUsuario', component: CadastroUsuarioComponent },
  { path: 'cadastrofaturamento', component: CadastroFaturamentoComponent },
  { path: 'faturamento', component: FaturamentoComponent },
  { path: 'login', component:  LoginComponent },
  { path: 'recuperarAcesso', component:  RecuperarAcessoComponent },
  { path: 'representante', component: RepresentanteComponent },
  { path: 'visualizar', component: VisualizarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
