import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./core/layouts/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('core-house');
}
