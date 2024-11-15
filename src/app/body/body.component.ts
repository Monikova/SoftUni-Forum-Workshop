import { Component } from '@angular/core';
import { ThemesComponent } from './themes/themes.component';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [ThemesComponent, PostsComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
