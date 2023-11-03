// Retorna o mês atual em formato de string com dois digitos ex: (01, 10, 11, ...)
const _currentMonth = (): string => {
  const d = new Date();
  const currentMonth = d.getMonth() + 1;
  const formatedMonth =
    `${currentMonth}`.length > 1 ? `${currentMonth}` : `0${currentMonth}`;
  return formatedMonth;
};

// Retorna o ano atual em formato de string com 4 digitos ex: (2022, 2019, 1998, ...)
const _currentYear = (): string => {
  const d = new Date();
  const currentYear = d.getFullYear();
  return `${currentYear}`;
};

// Converte uma string ou numero de ano para formato de 4 digitos, ou seja, se entrar 22 retorna 2022.
const _fullYearString = (year: string | number): string => {
  if (`${year}`.length === 2) {
    const d = new Date();
    const currentYear = d.getFullYear();
    const fullYearFormated = `${currentYear}`.substring(0, 2) + `${year}`;
    return fullYearFormated;
  }

  return `${year}`;
};

// Valida se a string de expiração é uma data valida
function isCreditCardExpirationValid(date: string): boolean {
  const currentMonth = _currentMonth();
  const currentYear = _currentYear();

  const dateSplited = date.split('/');
  const month = dateSplited[0];
  const year = _fullYearString(dateSplited[1]);

  const isMonthValid = (): boolean => {
    // Verifica se o mes esta entre 1 e 12
    if (Number(month) < 1 || Number(month) > 12) {
      return false;
    }

    // Verifica se o ano informado é o ano atual, e se for verifica se o mes é igual ou maior o mes atual
    // pois se for o ano corrente, não pode aceitar um mês que ja passou.
    if (year === currentYear) {
      return Number(month) >= Number(currentMonth);
    }

    // Caso as verificacões acima estejam ok, retorna sucesso
    return true;
  };

  // Verifica se o ano informado é valido
  const isYearValid = (): boolean => {
    // Valida se o ano informado não é maior que 15 anos a frente, para evitar datas muito distantes
    if (Number(year) > Number(currentYear) + 15) {
      return false;
    }

    // Verifica se o ano informado é maior ou igual ano atual
    return Number(year) >= Number(currentYear);
  };

  // Valida mes e ano
  return isMonthValid() && isYearValid();
}

export { isCreditCardExpirationValid };

// // Testes
// function getTestResult(date: string): string {
//   const result: boolean = isCreditCardExpirationValid(date);
//   return result ? "Data é valida" : "Data é invalida";
// }

// // Testes de sucesso
// console.log("Deve retornar data é valida (teste 1)", getTestResult("12/22"))
// console.log("Deve retornar data é valida (teste 2)", getTestResult("01/25"))

// // Testes de insucesso
// console.log("Deve retornar data é invalida (teste 1)", getTestResult("12/21"))
// console.log("Deve retornar data é invalida (teste 2)", getTestResult("03/19"))
// console.log("Deve retornar data é invalida (teste 3)", getTestResult("05/39"))
