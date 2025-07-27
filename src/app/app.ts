import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { About } from './components/about/about';

import { Footer } from './components/footer/footer';
import { Gallery } from './components/gallery/gallery';
import { Startframework } from './components/startframework/startframework';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Home, About, Footer, Gallery, Startframework],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'recab';
}
