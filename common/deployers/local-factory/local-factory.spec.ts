import { localFactory } from './local-factory';

it('should return the correct value', () => {
  expect(localFactory()).toBe('Hello world!');
});
