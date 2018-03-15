import { EmptyObservable } from 'rxjs/observable/EmptyObservable';

import { createSpyObj } from '../../utilities/create-spy';

export class KeyboardMock {
  public static instance(): any {
    const instance = createSpyObj('Keyboard', [
      'hideKeyboardAccessoryBar',
      'show',
      'close',
      'disableScroll',
      'onKeyboardShow',
      'onKeyboardHide'
    ]);

    instance.onKeyboardShow.and.returnValue(EmptyObservable.create());
    instance.onKeyboardHide.and.returnValue(EmptyObservable.create());

    return instance;
  }
}
