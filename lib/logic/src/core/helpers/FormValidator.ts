export class FormValidator {
  static Required = (v: any) => (!!v && v !== '') || 'Campo obrigatório';

  static NoSpecialChars = (v: any) =>
    !/[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g.test(v) ||
    'Não pode conter caracteres especiais';

  static NoEmptySpace = (v: string) =>
    !/^.+\s.+$/g.test(v) || 'Não pode conter espaço em branco';

  static MinChars = (num: number) => (v: string) =>
    (v !== undefined &&
      v !== '' &&
      !!v &&
      v.replace(/\s/g, '').length >= num) ||
    `Digite ${num} caracteres ou mais`;

  static MaxChars = (num: number) => (v: string) =>
    (v !== undefined && v !== '' && v.replace(/\s/g, '').length <= num) ||
    `Máximo ${num} caracteres`;

  static ValidateCEP = (v: string) => {
    return /(^[0-9]{5})-?([0-9]{3}$)/.test(v) || 'Informe um CEP válido';
  };

  static ValidateEmail = (v: any) => {
    return (
      (v &&
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        )) ||
      'E-mail inválido'
    );
  };

  static ValidatePhone = (v: string) => {
    return (
      // eslint-disable-next-line no-useless-escape
      /^\(?[1-9]{2}\)? ?[9]{0,1}[6-9]{1}[0-9]{3}\-?[0-9]{4}$/.test(v) ||
      'Número de celular inválido, insira novamente'
    );
  };

  static isAllFormInputsValid = (form: any): boolean => {
    if (form && form.inputs) {
      const numberOfInputs = form.inputs.length;

      const arr: boolean[] = form.inputs.filter((item: any) => {
        return item.valid === true;
      });

      return arr.length >= numberOfInputs;
    }

    return false;
  };

  static validateCpf(value: string) {
    if (value) {
      const cpf = value.replace(/[^\w\s]/gi, '');
      let numbers: any, digits: any, sum, i, result, equalDigits;
      equalDigits = 1;
      if (cpf.length < 11) return false;
      for (i = 0; i < cpf.length - 1; i++)
        if (cpf.charAt(i) !== cpf.charAt(i + 1)) {
          equalDigits = 0;
          break;
        }
      if (!equalDigits) {
        numbers = cpf.substring(0, 9);
        digits = cpf.substring(9);
        sum = 0;
        for (i = 10; i > 1; i--) sum += numbers.charAt(10 - i) * i;
        result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
        if (`${result}` !== digits.charAt(0)) return false;
        numbers = cpf.substring(0, 10);
        sum = 0;
        for (i = 11; i > 1; i--) sum += numbers.charAt(11 - i) * i;
        result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
        if (`${result}` !== digits.charAt(1)) return false;
        return true;
      } else return false;
    }
    return undefined;
  }

  static validateCNPJ(cnpj: string) {
    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj === '') return false;

    if (cnpj.length !== 14) return false;

    // Eliminates known invalid CNPJs

    if (
      cnpj === '00000000000000' ||
      cnpj === '11111111111111' ||
      cnpj === '22222222222222' ||
      cnpj === '33333333333333' ||
      cnpj === '44444444444444' ||
      cnpj === '55555555555555' ||
      cnpj === '66666666666666' ||
      cnpj === '77777777777777' ||
      cnpj === '88888888888888' ||
      cnpj === '99999999999999'
    )
      return false;

    let cnpjLength = cnpj.length - 2;
    let cnpjNumbers = cnpj.substring(0, cnpjLength);
    const cnpjDigits = cnpj.substring(cnpjLength);
    let sum = 0;
    let position = cnpjLength - 7;

    // Checking first verifying digit
    for (let i = cnpjLength; i >= 1; i--) {
      sum += Number(cnpjNumbers.charAt(cnpjLength - i)) * position--;
      if (position < 2) position = 9;
    }

    let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result.toString() !== cnpjDigits.charAt(0)) return false;

    // Checking second verifying digit
    cnpjLength = cnpjLength + 1;
    cnpjNumbers = cnpj.substring(0, cnpjLength);
    sum = 0;
    position = cnpjLength - 7;

    for (let i = cnpjLength; i >= 1; i--) {
      sum += Number(cnpjNumbers.charAt(cnpjLength - i)) * position--;
      if (position < 2) position = 9;
    }

    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result.toString() !== cnpjDigits.charAt(1)) return false;

    return true;
  }
}
