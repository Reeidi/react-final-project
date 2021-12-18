import React from 'react';
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from '../contexts/AuthContext';

// https://stackoverflow.com/questions/62384395/protected-route-with-react-router-v6
export default function RequireAuth() {
    let { user } = useAuthContext()
    let location = useLocation();
  
    if (!user) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/login" state={{ from: location }} />;
    }
  
    return <Outlet />;
};