import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import DataNavigation from './Data/NavigationBar';
import Home from './Component/Home';
import Unique from './SubComponent/Unique';
import LoginPage from './Component/LoginPage';
import Error from './Component/Error';
import About from './Component/About';
import Contact from './Component/Contact';
import UniqueDashboard from './Dashboard/UniqueDashboard';
import DashBoardHome from './Dashboard/DashBoardHome';
import DashBoardUnique from './SubComponent/DashBoardUnique';
import AssignmentNotification from './Dashboard/AssignmentNotification';
import Analysis from './Dashboard/Analysis';
import ProtectedRoute from './ProtectedRoute';
import Message from './Dashboard/Message';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setLoggedIn(true);
    });
    return unsubscribe;
  }, [auth]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Unique Data={DataNavigation} />}>
          <Route path='/' element={<Navigate to='/Home' />} />
          <Route index path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="/Admin" element={<DashBoardUnique Data={DataNavigation} />}>
          <Route index element={<LoginPage />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="/Admin/Dashboard" element={<UniqueDashboard />}>
          <Route index element={<ProtectedRoute user={isAuthenticated} component={<DashBoardHome />} />} />
          <Route path="Home" element={<ProtectedRoute user={isAuthenticated} component={<DashBoardHome />} />} />
          <Route path="Notification" element={<ProtectedRoute user={isAuthenticated} component={<AssignmentNotification />} />} />
          <Route path="Analytics" element={<ProtectedRoute user={isAuthenticated} component={<Analysis />} />} />
          <Route path="*" element={<ProtectedRoute user={isAuthenticated} component={<Error />} />} />
          <Route path="Message" element={<ProtectedRoute user={isAuthenticated} component={<Message />} />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
