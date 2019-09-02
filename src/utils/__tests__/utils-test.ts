import { gramsToKilograms, total } from '../';

describe('gramsToKilograms', () => {
  it('should return a number', () => {
    const grams = 8000;

    expect(gramsToKilograms(grams)).toEqual(8);
  });
});

describe('total', () => {
  it('should return 3', () => {
    const data = [1, 1, 0, 1];

    expect(total(data, 1)).toEqual(3);
  });

  it('should return 2', () => {
    const data = [1, 1, 0, 0, 1];

    expect(total(data, 0)).toEqual(2);
  });
});
