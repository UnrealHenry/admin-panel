import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { User, AuthContextType, UserRole } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for stored user data on app load
    const storedUser = localStorage.getItem('adminUser');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication - in real app, this would be an API call
    const mockUsers = [
      {
        id: '1',
        name: 'Admin User',
        email: 'admin@example.com',
        role: 'admin' as UserRole,
        status: 'active' as const,
        createdAt: '2024-01-01',
        lastLogin: new Date().toISOString(),
      },
      {
        id: '2',
        name: 'Manager User',
        email: 'manager@example.com',
        role: 'manager' as UserRole,
        status: 'active' as const,
        createdAt: '2024-01-01',
        lastLogin: new Date().toISOString(),
      },
      {
        id: '3',
        name: 'Viewer User',
        email: 'viewer@example.com',
        role: 'viewer' as UserRole,
        status: 'active' as const,
        createdAt: '2024-01-01',
        lastLogin: new Date().toISOString(),
      },
    ];

    const foundUser = mockUsers.find(u => u.email === email);
    
    if (foundUser && password === 'password') {
      setUser(foundUser);
      setIsAuthenticated(true);
      localStorage.setItem('adminUser', JSON.stringify(foundUser));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('adminUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Role-based access control hook
export const useRole = () => {
  const { user } = useAuth();
  
  const hasRole = (requiredRoles: UserRole[]): boolean => {
    if (!user) return false;
    return requiredRoles.includes(user.role);
  };

  const isAdmin = () => hasRole(['admin']);
  const isManager = () => hasRole(['admin', 'manager']);
  const isViewer = () => hasRole(['admin', 'manager', 'viewer']);

  return {
    hasRole,
    isAdmin,
    isManager,
    isViewer,
    userRole: user?.role,
  };
}; 