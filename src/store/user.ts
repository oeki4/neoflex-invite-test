import { makeAutoObservable } from "mobx";
import {Lang, languages} from "@/shared/const/languages.ts";

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
