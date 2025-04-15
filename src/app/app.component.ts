import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <main>
      <header class="app-container">
        <div class="app-icon-container">
          <img src="assets/icons8-github.svg"/>
          <a class="app-link" target="_blank" href="https://icons8.com/icon/62856/github">GitHub</a>
          <p class="app-icon-text">icon by</p>
          <a class="app-link" target="_blank" href="https://icons8.com">Icons8</a></div>
        <div>
      <h1 class="app-title">Github users</h1>
    </div>
      </header>
    </main>
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent { }
