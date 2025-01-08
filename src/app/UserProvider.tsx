'use client';
import React, { createContext, useContext, useState } from 'react';
interface UserContextType {
  userId: any;
  setUserId: React.Dispatch<React.SetStateAction<any>>;
  userBoard: any;
  setUserBoard: React.Dispatch<React.SetStateAction<any>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserContext = createContext<UserContextType | null>(null);
import type { ReactNode } from 'react';

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userId, setUserId] = useState(null);
  const [userBoard, setUserBoard] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <UserContext.Provider
      value={{ userId, setUserId, userBoard, setUserBoard, loading, setLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
