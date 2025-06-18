import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sample3ComponentComponent } from './sample3-component/sample3-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Sample3ComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'secondary-project';
}
