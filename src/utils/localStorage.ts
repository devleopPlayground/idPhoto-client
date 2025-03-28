export class LocalStorage {
  static getItem(key: string) {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key);
    }

    return null;
  }

  static setItem(key: string, value: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
    }
  }

  static removeItem(key: string) {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  }
}
