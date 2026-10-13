import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Toolbar} from './shared/presentation/components/toolbar/toolbar';
import { Footer } from "./shared/presentation/components/footer/footer";

@Component({
  imports: [Toolbar, RouterOutlet, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ea7747u20231f412');
}
