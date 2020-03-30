import { multiplicar } from '../src/data.js';

describe('multiplicar', () => {
  it('is a function', () => {
    expect(typeof multiplicar).toBe('function');
  });

  it('returns `48`', () => {
    expect(multiplicar(8, 6)).toBe(48);
  });
});
