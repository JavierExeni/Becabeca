import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-number',
  templateUrl: './star-number.component.html',
  styleUrls: ['./star-number.component.scss'],
})
export class StarNumberComponent {
  @Input() number = 0;
}
