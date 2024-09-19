import { Lang } from "../types/helpers/lang.types.ts";

export const languages: Lang[] = [
  {
    name: "Рус",
    value: "ru",
    currencyRate: 90,
  },
  {
    name: "Eng",
    value: "en",
    currencyRate: 1,
  },
];

export const priceNumToStr = (price: number, precision: number = 2) => {
  return price.toFixed(precision).replace(/\./g, ".");
};
