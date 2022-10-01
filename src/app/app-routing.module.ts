import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'redencao',
    loadChildren: () => import('./filmes/redencao/redencao.module').then( m => m.RedencaoPageModule)
  },
  {
    path: 'doutor-estranho',
    loadChildren: () => import('./filmes/doutor-estranho/doutor-estranho.module').then( m => m.DoutorEstranhoPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
