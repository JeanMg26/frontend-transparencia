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
  created_at: string;
  updated_at: string;
}

export interface Subcategory {
  id: number;
  name: string;
  category_id: number;
  created_at: string;
  updated_at: string;
}
