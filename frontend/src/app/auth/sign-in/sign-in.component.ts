import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { CommonInputComponent } from '../../shared/components/common-input/common-input.component';
import { InputErrorsComponent } from '../../core/errors/input-errors/input-errors.component';
import { RememberCheckboxComponent } from './remember-checkbox/remember-checkbox.component';
import { PasswordInputComponent } from '../../shared/components/password-input/password-input.component';
import { Router } from '@angular/router';

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
  private readonly router = inject(Router);
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

    this.authService.signin({ username, password }).subscribe({
      next: (response) => {
        this.router.navigate(['/plataform']);
      },
    });
  }
}
