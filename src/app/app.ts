import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./core/layouts/navbar/navbar";
import { Footer } from "./core/layouts/footer/footer";
import { Home } from "./core/pages/home/home";

@Component({
  selector: 'app-root',
<<<<<<< HEAD
  imports: [Navbar, Footer, Home],
=======
  imports: [Navbar, Footer, RouterOutlet],
>>>>>>> 1ef35ab7f86b09fbce12f6fcb3b38562dbb74a1c
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('core-house');
}
