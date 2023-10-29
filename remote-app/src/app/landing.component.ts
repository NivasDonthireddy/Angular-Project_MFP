import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildStandComponent } from './child-stand.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule,ChildStandComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

}
