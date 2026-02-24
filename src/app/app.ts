import { Component, signal } from '@angular/core';
import { Header } from './layout/header/header';
import { Sidebar } from './layout/sidebar/sidebar';
import { Body } from './layout/body/body';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Sidebar, Body, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('elias');
}
