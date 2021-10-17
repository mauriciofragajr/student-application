import { CpfValidator } from './cpf-validator';

describe('CpfValidator', () => {
  it('should be defined', () => {
    expect(new CpfValidator()).toBeDefined();
  });

  describe('cleanString', () => {
    test.each`
    cpf                 | expected
    ${'907.205.840-27'} | ${'90720584027'}
    ${'505.021.630-38'} | ${'50502163038'}
    ${'756.160.800-47'} | ${'75616080047'}
    `('should returns $expected when clean $cpf', ({cpf, expected}) => {
      const cpfValidator = new CpfValidator();
      expect(cpfValidator.cleanString(cpf)).toBe(expected)
    });
  })

  describe('hasInvalidSize', () => {
    test.each`
    cpf              | expected
    ${'90720584027'} | ${false}
    ${'50502103'}    | ${true}
    ${'75616080047'} | ${false}
    `('should returns $expected when $cpf', ({cpf, expected}) => {
      const cpfValidator = new CpfValidator();
      expect(cpfValidator.hasInvalidSize(cpf)).toBe(expected)
    });
  })

  describe('haveSameNumbers', () => {
    test.each`
    cpf              | expected
    ${'11111111111'} | ${true}
    ${'22222222222'} | ${true}
    ${'90720584027'} | ${false}
    ${'33333333333'} | ${true}
    `('should returns $expected when $cpf', ({cpf, expected}) => {
      const cpfValidator = new CpfValidator();
      expect(cpfValidator.haveSameNumbers(cpf)).toBe(expected)
    });
  })

  describe('validate', () => {
    test.each`
    cpf              | expected
    cpf                 | expected
    ${'133.066.247-48'} | ${true}
    ${'133.066.247-49'} | ${false}
    ${'907.205.840-27'} | ${true}
    ${'505.021.630-38'} | ${true}
    ${'756.160.800-47'} | ${true}
    ${'111.111.111-11'} | ${false}
    `('should returns $expected when $cpf', ({cpf, expected}) => {
      const cpfValidator = new CpfValidator();
      expect(cpfValidator.validate(cpf)).toBe(expected)
    });
  })

});
