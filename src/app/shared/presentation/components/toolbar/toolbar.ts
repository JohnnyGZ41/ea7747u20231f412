import { Component } from '@angular/core';
import {LanguageSwitcherComponent} from '../language-switcher/language-switcher';
import {TranslatePipe} from '@ngx-translate/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@Component({
  imports: [
    LanguageSwitcherComponent,
    TranslatePipe,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
  ],
  selector: 'app-toolbar',
  styleUrl: './toolbar.css',
  templateUrl: './toolbar.html',
})
export class Toolbar {}
