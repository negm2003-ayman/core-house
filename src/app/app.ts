import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./core/layouts/navbar/navbar";
import { Footer } from "./core/layouts/footer/footer";
import { Home } from "./core/pages/home/home";

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, Home],
  imports: [Navbar, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('core-house');
}
