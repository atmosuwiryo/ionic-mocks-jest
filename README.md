# ionic-mocks-jest

Simple test doubles for Ionic using Jasmine Spy Objects and Jest support

## Supported Types

* ActionSheet
* ActionSheetController
* Alert
* AlertController
* App
* Content
* Config
* Events
* Form
* Haptic
* InfiniteScroll
* ItemSliding
* KeyBoard - exported as IonKeyboard
* Loading
* LoadingController
* Menu
* MenuController
* Modal
* ModalController
* Platform
* Popover
* PopoverController
* NavController
* NavParams
* StatusBar
* Storage
* Tab
* Tabs
* Toast
* ToastController
* ViewController

## Native Plugins

* 3DTouch
* File
* GoogleAnalyics
* Keyboard
* Network
* NFC
* Splashscreen
* StatusBar
* Vibration

## Installation

```bash
npm install --save-dev ionic-mocks-jest
```

### Examples

```typescript
import { AlertController, Events } from 'ionic-angular';
import { AlertControllerMock, EventsMock } from 'ionic-mocks';

describe('MyClass', () => {
  let events: Events;
  let alertCtrl: AlertController;

  let classUnderTest: MyClass;

  beforeEach(() => {
    events = EventsMock.instance();
    alertCtrl = AlertControllerMock.instance();

    classUnderTest = new MyClass(events, alertCtrl);
  });

  it('should subscribe to events', () => {
    expect(events.subscribe).toHaveBeenCalled();
  });

  it('should call alert create', () => {
    classUnderTest.showAlert();

    expect(alertCtrl.create).toHaveBeenCalled();
  });
});
```

### Pre-mocked return types

```typescript
import { Alert, AlertController, Events } from 'ionic-angular';
import { AlertControllerMock, AlertMock, EventsMock } from 'ionic-mocks';

describe('MyComponent', () => {

    let alert: Alert;
    let events: Events;
    let alertCtrl: AlertController;

    let classUnderTest: MyClass;

    beforeEach(() => {

        events = EventsMock.instance();
        alert = AlertMock.instance():
        alertCtrl = AlertControllerMock.instance(alert);

        classUnderTest = new MyClass(events, alertCtrl);
    });


    it('should call present on alert', (done) => {

        classUnderTest.showAlert().then(() => {
            expect(alert.present).toHaveBeenCalled();
            done();
        });

    });
});
```

### Override ionic providers in TestingModule

```typescript
TestBed.configureTestingModule({
  imports: [IonicModule],
  declarations: [MyComponentUnderTest],
  providers: [
    { provide: ViewController, useFactory: () => ViewControllerMock.instance() }
  ]
});

```

### Frequently Asked Questions:

#### Q: I am receiving a `TypeError: jit__object_Object_33 is not a function` error. What does that mean?

Answer: This means you've done something wrong. Take a look at this example:

```ts
// DO NOT DO THIS
// USING useClass INSTEAD OF useFactory IS INCORRECT
{ provide: App, useClass: AppMock }
```

```ts
// DO NOT DO THIS
// USING useFactory WITHOUT THE FAT ARROW SYNTAX IS INCORRECT
{ provide: App, useFactory: AppMock.instance() }
```

Make sure you are using the `useFactory` property name and using the fat arrow function as the value:

```ts
// DO THIS
{ provide: App, useFactory: () => AppMock.instance() }
```
