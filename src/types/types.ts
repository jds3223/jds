export interface Property {
  id: number;
  title: string;
  image: string;
  location: string;
  locationLabel: string;
  features: {
    title: string;
    description: string;
  }[];
  description: string;
  handoverDate: string;
}