
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

interface RouteProviderProps {
  children: React.ReactNode;
}

// This component can be used to wrap any component that needs router access
const RouteProvider: React.FC<RouteProviderProps> = ({ children }) => {
  return <Router>{children}</Router>;
};

export default RouteProvider;
