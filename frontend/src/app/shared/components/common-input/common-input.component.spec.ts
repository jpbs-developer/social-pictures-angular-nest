import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonInputComponent } from './common-input.component';
import { By } from '@angular/platform-browser';

describe(CommonInputComponent.name, () => {
  let fixture: ComponentFixture<CommonInputComponent>;
  let component: CommonInputComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommonInputComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('label', 'mockLabel');
    expect(component).toBeTruthy();
  });

  it('should populate (@Input label) when passing through the parent component', () => {
    const mockLabel = 'mockLabel';
    fixture.componentRef.setInput('label', mockLabel);
    expect(component.label()).toBe(mockLabel);
  });

  it('should trigger (writeValue) method when value changes', () => {
    fixture.componentRef.setInput('label', 'mockLabel');
    const spy = spyOn(component, 'writeValue');
    const input = fixture.debugElement.query(By.css('[data-test="input"]'))
      .nativeElement as HTMLInputElement;
    input.dispatchEvent(new KeyboardEvent('keyup'));
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.count()).toBe(1);
  });

  it('should trigger (onChanged) method when value changes', () => {
    fixture.componentRef.setInput('label', 'mockLabel');
    const spy = spyOn(component, 'onChanged');
    const input = fixture.debugElement.query(By.css('[data-test="input"]'))
      .nativeElement as HTMLInputElement;
    input.dispatchEvent(new KeyboardEvent('keyup'));
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.count()).toBe(1);
  });

  it('should trigger (onTouched) method when value changes', () => {
    fixture.componentRef.setInput('label', 'mockLabel');
    const spy = spyOn(component, 'onTouched');
    const input = fixture.debugElement.query(By.css('[data-test="input"]'))
      .nativeElement as HTMLInputElement;
    input.dispatchEvent(new KeyboardEvent('keyup'));
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.count()).toBe(1);
  });
});
