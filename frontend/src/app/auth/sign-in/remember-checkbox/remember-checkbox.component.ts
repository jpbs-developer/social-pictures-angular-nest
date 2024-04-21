import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, model } from '@angular/core';

@Component({
  selector: 'app-remember-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './remember-checkbox.component.html',
  styleUrls: ['./remember-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RememberCheckboxComponent {
  handleRememberCheck = model.required<boolean>();

  changeCheckbox(event: Event) {
    const value = (event.target as HTMLInputElement).checked;
    this.handleRememberCheck.set(value);
  }
}
