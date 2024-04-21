import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RememberCheckboxComponent } from './remember-checkbox.component';
import { By } from '@angular/platform-browser';

describe(RememberCheckboxComponent.name, () => {
  let fixture: ComponentFixture<RememberCheckboxComponent>;
  let component: RememberCheckboxComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RememberCheckboxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RememberCheckboxComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('handleRememberCheck', true);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate (@Input handleRememberCheck) when passing through the parent component', () => {
    const mockValue = true;
    expect(component.handleRememberCheck()).toBe(mockValue);
  });

  it('should be triggered (hangeCheckbox()) when checkbox is changed', () => {
    const spyChangeCheckbox = spyOn(
      component,
      'changeCheckbox'
    ).and.callThrough();
    const spyHandleRememberCheck = spyOn(component.handleRememberCheck, 'set');
    const checkbox = fixture.debugElement.query(
      By.css('[data-test="checkbox"]')
    ).nativeElement as HTMLInputElement;

    checkbox.dispatchEvent(new Event('change'));

    expect(spyChangeCheckbox).toHaveBeenCalled();
    expect(spyChangeCheckbox).toHaveBeenCalledTimes(1);
    expect(spyHandleRememberCheck).toHaveBeenCalled();
    expect(spyHandleRememberCheck).toHaveBeenCalledTimes(1);
  });
});
