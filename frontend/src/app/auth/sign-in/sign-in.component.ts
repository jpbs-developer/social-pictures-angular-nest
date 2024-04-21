import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { CommonInputComponent } from '../../shared/components/common-input/common-input.component';
import { InputErrorsComponent } from '../../core/errors/input-errors/input-errors.component';
import { RememberCheckboxComponent } from './remember-checkbox/remember-checkbox.component';
import { PasswordInputComponent } from '../../shared/components/password-input/password-input.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonInputComponent,
    InputErrorsComponent,
    RememberCheckboxComponent,
    PasswordInputComponent,
  ],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignInComponent implements OnInit {
  isRemember = false;
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  signinForm: FormGroup;

  ngOnInit(): void {
    this.buildSigninForm();
  }

  buildSigninForm() {
    this.signinForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  submit() {
    const { username, password } = this.signinForm.getRawValue();
    console.log(this.isRemember);

    this.authService.signin({ username, password }).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
}
