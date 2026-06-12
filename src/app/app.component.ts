import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFirstComponent } from './my-first/my-first.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyFirstComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {
  protected readonly title = signal('todo-angular');
}
