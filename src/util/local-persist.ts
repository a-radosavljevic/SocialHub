class LocalPersist {
  static set(key: string, obj: any) {
    localStorage.setItem(key, JSON.stringify(obj));
  }

  static get(key: string) {
    let obj = localStorage.getItem(key);
    return obj ? JSON.parse(obj as string) : null;
  }
}

export default LocalPersist;
