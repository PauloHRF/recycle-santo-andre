export type MaterialType = "plastic" | "glass" | "paper" | "metal" | "electronics";

export interface RecyclingPoint {
  id: string;
  name: string;
  address: string;
  neighborhood: string;
  materials: MaterialType[];
  hours: string;
  phone?: string;
  lat: number;
  lng: number;
}
