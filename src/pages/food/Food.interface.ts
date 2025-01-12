export interface Food {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  ingredients: string[];
  price: number | null;
  priceDiscount: number | null;
  rating: number;
  totalLikes: number;
}