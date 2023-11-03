export class FormatHelper {
  static formatMoney(value: number | string): string {
    return value.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    });
  }

  static formatDateString(value: string): string {
    const date = new Date(value);
    return date.toLocaleDateString('pt-BR', {
      timeZone: 'UTC'
    });
  }

  static removeSpecialCharsFromString(val: string): string {
    return val.replace(/[^\w\s]/gi, '');
  }

  static removeBlankSpaceFromString(val: string): string {
    return val.replace(/[^\w]/gi, '');
  }

  static removeDotFromMoneyString(val: string): number {
    return Number(val.replace(/\./g, '').replace(/,/g, '.'));
  }

  static transformObjectValues(
    obj: Record<string, any>,
    transformer: (val: any) => any
  ) {
    const result: Record<string, any> = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = transformer(value);
    }
    return result;
  }
}
