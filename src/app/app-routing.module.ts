import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'mtutorialoptions',
    loadChildren: () => import('./pages/mtutorialoptions/mtutorialoptions.module').then( m => m.MtutorialoptionsPageModule)
  },
  {
    path: 'm-tutorial-article',
    loadChildren: () => import('./pages/m-tutorial-article/m-tutorial-article.module').then( m => m.MTutorialArticlePageModule)
  },
  {
    path: 'ptutorialoptions',
    loadChildren: () => import('./pages/pages/ptutorialoptions/ptutorialoptions.module').then( m => m.PtutorialoptionsPageModule)
  },
  {
    path: 'ptutorial',
    loadChildren: () => import('./pages/ptutorial/ptutorial.module').then( m => m.PtutorialPageModule)
  },
  {
    path: 'library',
    loadChildren: () => import('./pages/library/library.module').then( m => m.LibraryPageModule)
  },
  {
    path: 'sheet1',
    loadChildren: () => import('./pages/sheet1/sheet1.module').then( m => m.Sheet1PageModule)
  },
  {
    path: 'm-video1',
    loadChildren: () => import('./pages/m-video1/m-video1.module').then( m => m.MVideo1PageModule)
  },
  {
    path: 'p-video1',
    loadChildren: () => import('./pages/p-video1/p-video1.module').then( m => m.PVideo1PageModule)
  },
  {
    path: 'm-article1',
    loadChildren: () => import('./pages/m-article1/m-article1.module').then( m => m.MArticle1PageModule)
  },
  {
    path: 'p-article1',
    loadChildren: () => import('./pages/p-article1/p-article1.module').then( m => m.PArticle1PageModule)
  },  {
    path: 'm-video2',
    loadChildren: () => import('./pages/m-video2/m-video2.module').then( m => m.MVideo2PageModule)
  },
  {
    path: 'm-video3',
    loadChildren: () => import('./pages/m-video3/m-video3.module').then( m => m.MVideo3PageModule)
  },
  {
    path: 'm-video4',
    loadChildren: () => import('./pages/m-video4/m-video4.module').then( m => m.MVideo4PageModule)
  },
  {
    path: 'p-video2',
    loadChildren: () => import('./pages/p-video2/p-video2.module').then( m => m.PVideo2PageModule)
  },
  {
    path: 'p-video3',
    loadChildren: () => import('./pages/p-video3/p-video3.module').then( m => m.PVideo3PageModule)
  },
  {
    path: 'p-video4',
    loadChildren: () => import('./pages/p-video4/p-video4.module').then( m => m.PVideo4PageModule)
  },
  {
    path: 'm-tutorial-video',
    loadChildren: () => import('./pages/m-tutorial-video/m-tutorial-video.module').then( m => m.MTutorialVideoPageModule)
  },
  {
    path: 'ptutorial-video',
    loadChildren: () => import('./pages/ptutorial-video/ptutorial-video.module').then( m => m.PtutorialVideoPageModule)
  },
  {
    path: 'm-article2',
    loadChildren: () => import('./pages/m-article2/m-article2.module').then( m => m.MArticle2PageModule)
  },
  {
    path: 'm-article3',
    loadChildren: () => import('./pages/m-article3/m-article3.module').then( m => m.MArticle3PageModule)
  },
  {
    path: 'm-article4',
    loadChildren: () => import('./pages/m-article4/m-article4.module').then( m => m.MArticle4PageModule)
  },
  {
    path: 'm-article5',
    loadChildren: () => import('./pages/m-article5/m-article5.module').then( m => m.MArticle5PageModule)
  },
  {
    path: 'm-article6',
    loadChildren: () => import('./pages/m-article6/m-article6.module').then( m => m.MArticle6PageModule)
  },
  {
    path: 'm-article7',
    loadChildren: () => import('./pages/m-article7/m-article7.module').then( m => m.MArticle7PageModule)
  },
  {
    path: 'p-article2',
    loadChildren: () => import('./pages/p-article2/p-article2.module').then( m => m.PArticle2PageModule)
  },
  {
    path: 'p-article3',
    loadChildren: () => import('./pages/p-article3/p-article3.module').then( m => m.PArticle3PageModule)
  },
  {
    path: 'p-article4',
    loadChildren: () => import('./pages/p-article4/p-article4.module').then( m => m.PArticle4PageModule)
  },
  {
    path: 'p-article5',
    loadChildren: () => import('./pages/p-article5/p-article5.module').then( m => m.PArticle5PageModule)
  },
  {
    path: 'p-article6',
    loadChildren: () => import('./pages/p-article6/p-article6.module').then( m => m.PArticle6PageModule)
  },
  {
    path: 'p-article7',
    loadChildren: () => import('./pages/p-article7/p-article7.module').then( m => m.PArticle7PageModule)
  },
  {
    path: 'sheet2',
    loadChildren: () => import('./pages/sheet2/sheet2.module').then( m => m.Sheet2PageModule)
  },
  {
    path: 'sheet3',
    loadChildren: () => import('./pages/sheet3/sheet3.module').then( m => m.Sheet3PageModule)
  },
  {
    path: 'sheet4',
    loadChildren: () => import('./pages/sheet4/sheet4.module').then( m => m.Sheet4PageModule)
  },
  {
    path: 'sheet5',
    loadChildren: () => import('./pages/sheet5/sheet5.module').then( m => m.Sheet5PageModule)
  },
  {
    path: 'sheet6',
    loadChildren: () => import('./pages/sheet6/sheet6.module').then( m => m.Sheet6PageModule)
  },
  {
    path: 'sheet7',
    loadChildren: () => import('./pages/sheet7/sheet7.module').then( m => m.Sheet7PageModule)
  },
  {
    path: 'sheet8',
    loadChildren: () => import('./pages/sheet8/sheet8.module').then( m => m.Sheet8PageModule)
  },
  {
    path: 'sheet9',
    loadChildren: () => import('./pages/sheet9/sheet9.module').then( m => m.Sheet9PageModule)
  },
  {
    path: 'sheet10',
    loadChildren: () => import('./pages/sheet10/sheet10.module').then( m => m.Sheet10PageModule)
  },
  {
    path: 'sheet11',
    loadChildren: () => import('./pages/sheet11/sheet11.module').then( m => m.Sheet11PageModule)
  },
  {
    path: 'sheet12',
    loadChildren: () => import('./pages/sheet12/sheet12.module').then( m => m.Sheet12PageModule)
  },
  {
    path: 'library-classical',
    loadChildren: () => import('./pages/library-classical/library-classical.module').then( m => m.LibraryClassicalPageModule)
  },
  {
    path: 'library-pop',
    loadChildren: () => import('./pages/library-pop/library-pop.module').then( m => m.LibraryPopPageModule)
  },
  {
    path: 'favourite',
    loadChildren: () => import('./pages/favourite/favourite.module').then( m => m.FavouritePageModule)
  },
  {
    path: 'piano',
    loadChildren: () => import('./pages/piano/piano.module').then( m => m.PianoPageModule)
  },
  {
    path: 'piano2',
    loadChildren: () => import('./pages/piano2/piano2.module').then( m => m.Piano2PageModule)
  },
  {
    path: 'scoring',
    loadChildren: () => import('./pages/scoring/scoring.module').then( m => m.ScoringPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
