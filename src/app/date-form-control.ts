import {FormControl} from '@angular/forms';

export class DateFormControl extends FormControl {
  setValue(
    value: string | null,
    options?: { onlySelf?: boolean; emitEvent?: boolean; emitModelToViewChange?: boolean; emitViewToModelChange?: boolean }
  ): void {
    const customOptions = {
      ...options,
      emitModelToViewChange: true
    };

    if (!value) {
      return super.setValue('', customOptions);
    }

    if (value.match(/[^0-9|\/]/gi) || value.length > 5) {
      return super.setValue(this.value, customOptions);
    }

    if (value.length === 2 && this.value.length === 3) {
      return super.setValue(value, customOptions);
    }

    if (value.length === 2) {
      return super.setValue(value + '/', customOptions);
    }
    super.setValue(value, customOptions);
  }
}
