import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { HeaderComponent } from '../shared/components/header/header.component';

@Component({
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeaderComponent],
  template: `
    <app-header />
    <main class="w-[90vw] mx-auto">
      <router-outlet></router-outlet>
    </main>
  `,
})
export class ModulesComponent {}
