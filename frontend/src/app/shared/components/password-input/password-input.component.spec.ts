import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordInputComponent } from './password-input.component';
import { By } from '@angular/platform-browser';

describe(PasswordInputComponent.name, () => {
  let fixture: ComponentFixture<PasswordInputComponent>;
  let component: PasswordInputComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordInputComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('label', 'mockLabel');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show password', () => {
    const btnShowPassword = fixture.debugElement.query(
      By.css('[data-test="showPassword"]')
    ).nativeElement as HTMLElement;

    btnShowPassword.click();
    expect(component.hide()).toBeFalse();
  });

  it('should hide password', () => {
    component.hide.set(false);
    fixture.detectChanges()
    const btnHidePassword = fixture.debugElement.query(
      By.css('[data-test="hidePassword"]')
    ).nativeElement as HTMLElement;

    btnHidePassword.click();
    expect(component.hide()).toBeTrue();
  });

  it('should populate (@Input label) when passing through the parent component', () => {
    const mockLabel = 'mockLabel';
    fixture.componentRef.setInput('label', mockLabel);
    expect(component.label()).toBe(mockLabel);
  });

  it('should trigger (writeValue) method when value changes', () => {
    const spy = spyOn(component, 'writeValue');
    const input = fixture.debugElement.query(By.css('[data-test="input"]'))
      .nativeElement as HTMLInputElement;
    input.dispatchEvent(new KeyboardEvent('keyup'));
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.count()).toBe(1);
  });

  it('should trigger (onChanged) method when value changes', () => {
    const spy = spyOn(component, 'onChanged');
    const input = fixture.debugElement.query(By.css('[data-test="input"]'))
      .nativeElement as HTMLInputElement;
    input.dispatchEvent(new KeyboardEvent('keyup'));
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.count()).toBe(1);
  });

  it('should trigger (onTouched) method when value changes', () => {
    const spy = spyOn(component, 'onTouched');
    const input = fixture.debugElement.query(By.css('[data-test="input"]'))
      .nativeElement as HTMLInputElement;
    input.dispatchEvent(new KeyboardEvent('keyup'));
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.count()).toBe(1);
  });
});
