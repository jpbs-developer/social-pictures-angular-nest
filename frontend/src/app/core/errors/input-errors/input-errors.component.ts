import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  SimpleChanges,
  input,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-errors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-errors.component.html',
  styleUrls: ['./input-errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputErrorsComponent {
  errorMessage = input.required<string>();

  constructor() {}
}
