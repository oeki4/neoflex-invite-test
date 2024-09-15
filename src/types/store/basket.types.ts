export interface BasketProduct {
  id: number;
  title: string;
  photo: string;
  rate: number;
  price: number;
  priceWithDiscount: number | null;
  amount: number;
}
