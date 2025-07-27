import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Gallery } from './components/gallery/gallery';
import { Notfound } from './components/notfound/notfound';
import { Startframework } from './components/startframework/startframework';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'home page' },
  {
    path: 'startframework',
    component: Startframework,
    title: 'startframework page',
  },

  {
    path: 'about',
    component: About,
    title: 'about page',
    children: [
      { path: '', redirectTo: 'tv', pathMatch: 'full' },

      { path: '**', component: Notfound, title: 'notfound' },
    ],
  },
  { path: 'gallery', component: Gallery, title: 'gallery page' },
  { path: '**', component: Notfound, title: 'notfound' },
];
