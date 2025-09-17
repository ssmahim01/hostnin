export interface Review {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  review: string;
  service: string;
  date: string;
}

export interface ReviewsPageProps {
  reviews: Review[];
}
