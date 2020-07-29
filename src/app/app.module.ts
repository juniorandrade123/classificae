import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './Pages/header/app-header.component';
import { ContentComponent } from './Pages/content/app-content.component';
import { SectionComponent } from './Pages/section/app-section.component';
import { FooterComponent } from './Pages/footer/app-footer.component';

import { AdquirirComponent } from './Pages/adquirir/app-adquirir.component';
import { AnuncieComponent } from './Pages/anuncie/app-anuncie.component';
import { AnuncianteComponent } from './Pages/anunciante/app-anunciante.component';
import { CategoriaComponent } from './Pages/categoria/app-categoria.component';
import { CadastroUsuarioComponent } from './Pages/cadastroUsuario/app-cadastroUsuario.component';
import { CadastroEmpresaComponent } from './Pages/cadastroEmpresa/app-cadastroEmpresa.component';
// import { CadastroFaturamentoComponent } from './Pages/cadastroFaturamento/app-cadastroFaturamento.component';

import { FaturamentoComponent } from './Pages/faturamento/app-faturamento.component';
import { LoginComponent } from './Pages/login/app-login.component';
import { RecuperarAcessoComponent } from './Pages/recuperarAcesso/app-recuperarAcesso.component';
import { RepresentanteComponent } from './Pages/representante/app-representante.component';
import { VisualizarComponent } from './Pages/visualizar/app-visualizar.component';

import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { BrMaskerModule } from 'br-mask';
import { NgxMaskModule, IConfig } from 'ngx-mask'

const maskConfig: Partial<IConfig> = {
  validation: false,
};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SectionComponent,
    FooterComponent,
    AdquirirComponent,
    AnuncieComponent,
    AnuncianteComponent,
    CategoriaComponent,
    CadastroUsuarioComponent,
    CadastroEmpresaComponent,
    // CadastroFaturamentoComponent,
    FaturamentoComponent,
    LoginComponent,
    RecuperarAcessoComponent,
    RepresentanteComponent,
    VisualizarComponent

  ],
  imports: [
    BrowserAnimationsModule,
    MatDialogModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    BrMaskerModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }



