import { makeAutoObservable } from "mobx";
import { Lang } from "../types/helpers/lang.types.ts";
import { languages } from "../helpers/lang.ts";

class UserStore {
  lang: Lang | null = languages[0];
  constructor() {
    makeAutoObservable(this);
  }

  setLanguage = (value: Lang) => {
    this.lang = value;
  };
}

export default UserStore;
