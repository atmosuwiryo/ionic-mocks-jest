import { ViewControllerMock } from './view-controller';
describe('ViewControllerMock', () => {
  it('should initialize', () => {
    const instance = ViewControllerMock.instance();
    expect(instance).toBeDefined();
  });
});
