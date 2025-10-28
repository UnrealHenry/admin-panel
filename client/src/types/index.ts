export type UserRole = 'admin' | 'manager' | 'viewer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  status: 'active' | 'inactive';
  createdAt: string;
  lastLogin?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'in-stock' | 'low-stock' | 'out-of-stock';
  createdAt: string;
}

export interface Order {
  id: string;
  customerName: string;
  productName: string;
  amount: number;
  status: 'pending' | 'completed' | 'cancelled';
  date: string;
}

export interface ChartData {
  name: string;
  value: number;
  date?: string;
}

export interface WeeklySalesData {
  week: string;
  sales: number;
  orders: number;
}

export interface UserActivityData {
  date: string;
  activeUsers: number;
  newUsers: number;
}

export interface RevenueData {
  product: string;
  revenue: number;
  units: number;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

export interface FormData {
  name: string;
  email: string;
  role: UserRole;
  status: 'active' | 'inactive';
} 