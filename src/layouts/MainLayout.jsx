import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'; /* Import Component */
 
const MainLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  );
};

export default MainLayout

/* MainLayout Component:
    Acts as a wrapper or layout for the application.
    Includes <Navbar /> component for any page
    Contains an <Outlet /> placeholder component.

    <Outlet />:
    A placeholder that renders child route components inside the MainLayout.
    For example, if the child route is the HomePage, the <Outlet /> in MainLayout will render the HomePage component.
 */