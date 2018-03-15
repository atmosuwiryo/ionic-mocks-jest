import { NavControllerMock } from './nav-controller';

describe('NavControllerMock', () => {
  it('should initialize', () => {
    const instance = NavControllerMock.instance();
    expect(instance).toBeDefined();
  });
});
