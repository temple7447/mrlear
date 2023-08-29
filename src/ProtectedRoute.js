
import { Route, Navigate, Outlet } from 'react-router-dom';
import React, { useState, useEffect, Fragment } from "react";
import Test from './Test';

const ProtectedRoute = ({ user, component }) => {

    return user ? component : <Navigate to="/ADMIN" />;


}

export default ProtectedRoute;



