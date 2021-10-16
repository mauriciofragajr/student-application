import { ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@ValidatorConstraint({name: 'IsCPF'})
export class CpfValidator implements ValidatorConstraintInterface {
  validate(cpf: string) {
    cpf = this.cleanString(cpf)

    if (this.hasInvalidSize(cpf) || this.haveSameNumbers(cpf)) return false

    const cpfArray = cpf.split('')

    const validatorDigit = cpfArray
      .filter((digit, index, array) => index >= array.length - 2 && digit)
      .map(el => +el)

    const toValidate = pop => cpfArray
      .filter((digit, index, array) => index < array.length - pop && digit)
      .map(el => +el)

    const rest = (count, pop) => (
      toValidate(pop)
        .reduce((soma, el, i) => soma + el * (count - i), 0) * 10) % 11 % 10

    return !(rest(10, 2) !== validatorDigit[0] || rest(11, 1) !== validatorDigit[1])
  }

  cleanString(cpf: string) {
    return cpf.replace(/[^\d]+/g, '')
  }

  hasInvalidSize(cpf: string) {
    return cpf.length !== 11
  }

  haveSameNumbers(cpf) {
    return !!cpf.match(/(\d)\1{10}/)
  }
}
