import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { ListaCategoriasComponent } from './categorias/lista-categorias/lista-categorias.component';
import { FormCategoriasComponent } from './categorias/form-categorias/form-categorias.component';
import { ListaProdutosComponent } from './produtos/lista-produtos/lista-produtos.component';
import { FormProdutosComponent } from './produtos/form-produtos/form-produtos.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { LoginComponent } from './usuarios/login/login.component';
import { CriarContaComponent } from './usuarios/criar-conta/criar-conta.component';
import { EsqueciSenhaComponent } from './usuarios/esqueci-senha/esqueci-senha.component';
import { AuthGuard } from './usuarios/shared/auth.guard';
import { ListaPedidosComponent } from './pedidos/lista-pedidos/lista-pedidos.component';
import { DetalhePedidoComponent } from './pedidos/detalhe-pedido/detalhe-pedido.component';
import { ContatoComponent } from './contato/contato/contato.component';

const routes: Routes = [
{
  path: '',
  component: HomeLayoutComponent,
  canActivate: [AuthGuard],
  children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'categorias', component: ListaCategoriasComponent},
    {path: 'pedidos', component: ListaPedidosComponent},
    {path: 'pedidos/detalhe/:key', component: DetalhePedidoComponent },
    {path: 'categorias/nova', component: FormCategoriasComponent},
    {path: 'categorias/editar/:key', component: FormCategoriasComponent},
    {path: 'produtos', component:ListaProdutosComponent},
    {path: 'produtos/novo', component: FormProdutosComponent},
    {path: 'produtos/editar/:key', component: FormProdutosComponent},
    {path: 'contato', component: ContatoComponent},
// o path vazio "path: '' " será direcionado para rota especificada no "redirectTo", e o patchMatch significa para começar da raiz
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'}

  ]
}

,
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'criar-conta', component:  CriarContaComponent},
      { path: 'esqueci-senha', component:  EsqueciSenhaComponent}
    ]
  },
  { path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
