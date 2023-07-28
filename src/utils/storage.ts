export type StorageKey = {
  ACCESS_TOKEN: string;
  REFRESH_TOKEN: string;
};

class Storage {
  public static setItem(key: keyof StorageKey, value: string) {
    localStorage.setItem(key, value);
  }

  public static getItem(key: keyof StorageKey) {
    return localStorage.getItem(key);
  }
}

export default Storage;
