export interface Product {
  id: number;
  title: string;
  photo: string;
  rate: number;
  price: number;
  priceWithDiscount: number | null;
}
