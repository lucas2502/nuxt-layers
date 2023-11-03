import { Config } from '@/config';

export class Helper {
  static textToCode(text: string): string {
    let code: string | undefined;
    if (text !== undefined && text.includes(' ')) {
      code = text.replace(/ /g, '_');
    } else {
      code = text;
    }
    return code.toUpperCase();
  }

  static replaceText(text: string): string {
    let code: string | undefined;
    if (text !== undefined && text.includes('-')) {
      code = text.replace(/-(?!>)/g, ' ');
    } else {
      code = text;
    }
    return code.toUpperCase();
  }

  static isTestMode(): boolean {
    return Config.getInstance?.isMockActive === true;
  }

  static getCleanObj(obj: Record<string, any>): Record<string, any> {
    const localObj = JSON.parse(JSON.stringify(obj));
    Object.keys(localObj).forEach(
      (key: any) => this.isEmpty(localObj[key as any]) && delete localObj[key]
    );
    return localObj;
  }

  static isEmpty(val: any): boolean {
    const s = val;
    return s === '' || s === null || s === undefined;
  }

  static isNotEmpty(val: any): boolean {
    return !this.isEmpty(val);
  }

  static isDefined<T>(val: T | undefined | null): val is T {
    const s = val;
    return s !== null && s !== undefined;
  }

  static isNotDefined<T>(val: T | undefined | null): val is T {
    return !this.isDefined<T>(val);
  }

  static downloadFile({
    fileName,
    content
  }: {
    fileName: string;
    content: string;
  }) {
    const element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(content)
    );
    element.setAttribute('download', fileName);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  static downloadBlob({
    fileName,
    content
  }: {
    fileName: string;
    content: any;
  }) {
    const element = document.createElement('a');
    element.setAttribute('href', URL.createObjectURL(content));
    element.setAttribute('download', `${fileName}`);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  static useAssetBlob(asset: Blob): Promise<string> {
    const reader = new FileReader();

    return new Promise<string>((resolve, reject) => {
      reader.addEventListener('load', () => {
        resolve(reader.result as string);
      });

      reader.onerror = err => {
        reject(err);
      };

      reader.readAsDataURL(asset);
    });
  }

  static isJson(body: any) {
    try {
      JSON.parse(body);
      return true;
    } catch (err) {
      return false;
    }
  }

  static getDate(arr: number[]): string | undefined {
    let d: Date | undefined;

    function _getDay(n: number) {
      return n > 0 ? n - 1 : n;
    }

    if (arr.length === 3) {
      d = new Date(arr[0], _getDay(arr[1]), arr[2]);
    } else if (arr.length === 5) {
      d = new Date(arr[0], _getDay(arr[1]), arr[2], arr[3], arr[4]);
    } else if (arr.length === 6) {
      d = new Date(arr[0], _getDay(arr[1]), arr[2], arr[3], arr[4], arr[5]);
    }

    if (d !== undefined) {
      const formatter = new Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'short',
        timeStyle: 'medium'
      });
      return formatter.format(d);
    }

    return undefined;
  }

  static isJwtExpired(token: string): boolean {
    const base64Payload = token.split('.')[1];
    const payload = Buffer.from(base64Payload, 'base64');
    const json = JSON.parse(payload.toString());

    return Date.now() < json.exp * 1000;
  }

  static isCepValid(cep: string): boolean {
    return /(^[0-9]{5})-?([0-9]{3}$)/.test(cep);
  }

  static async parseYamlToJSON(yaml: string): Promise<object | undefined> {
    // @ts-ignore
    const jsYaml = await import('js-yaml');

    try {
      const jsonObj = jsYaml.load(yaml);
      const jsonString = JSON.stringify(jsonObj);
      return JSON.parse(jsonString);
    } catch (err) {
      return undefined;
    }
  }
}
