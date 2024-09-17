export interface BasketProduct {
  id: number;
  title: string;
  photo: string;
  rate: number;
  price: number;
  priceWithDiscount: number | null;
  amount: number;
  description: string;
  characteristics: Array<{
    name: string;
    value: string;
  }>;
}
