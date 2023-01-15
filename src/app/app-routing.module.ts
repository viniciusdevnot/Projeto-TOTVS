import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './components/resources/services/auth-guard.service';

const routes: Routes = [


  //rotas Projeto
  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'home',
    //canActivate -> Guarda de rota
    canActivate: [AuthGuardService],
    loadChildren: () => import('./components/home/home.module').then((m) => m.HomeModule),
    //deixar o carregamento de componentes mais leve, carregando esse componente somente após o .then do login na request

  },

  //se tentar procurar uma rota diferente das rotas declaradas anteriormente, será redirecionado para a tela de login
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
