export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  active: number;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: number;
  name: string;
  article: any;
  created_at: string;
  updated_at: string;
}

export interface Profile {
  id: number;
  name: string;
  username: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface Article {
  id: number;
  title: string;
  autor: string;
  description: string;
  route: string;
  image: string;
  category: string;
  category_id: number;
  created_at: string;
  updated_at: string;
}

export interface Activity {
  id: number;
  title: string;
  autor: string;
  description: string;
  url_img: string;
  id_img: number;
  created_at: string;
  updated_at: string;
}
