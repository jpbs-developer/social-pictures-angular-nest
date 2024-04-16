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

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, CommonInputComponent, InputErrorsComponent],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignInComponent implements OnInit {
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
    this.authService.signin({ username, password }).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
}
