import React from 'react'
import { Outlet } from 'react-router-dom';
 
const MainLayout = () => {
  return (
    <>
        <Outlet />
    </>
  );
};

export default MainLayout

/* MainLayout Component:
    Acts as a wrapper or layout for the application.
    Contains an <Outlet /> component.
    
    <Outlet />:
    A placeholder that renders child route components inside the MainLayout.
    For example, if the child route is the HomePage, the <Outlet /> in MainLayout will render the HomePage component.
 */