import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-common-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-input.component.html',
  styleUrls: ['./common-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CommonInputComponent),
      multi: true,
    },
  ],
})
export class CommonInputComponent implements ControlValueAccessor {
  label = input.required<string>();
  protected disabled: boolean;
  protected value: any;

  onChanged = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  setText(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.writeValue(value);
    this.onChanged(value);
    this.onTouched();
  }
}
