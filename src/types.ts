export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  format: 'long' | 'short' | 'motion' | 'graphics';
  isFeatured?: boolean;
  link?: string;
}

export interface Exhibition {
  id: string;
  title: string;
  location: string;
  date: string;
  number: string;
}
