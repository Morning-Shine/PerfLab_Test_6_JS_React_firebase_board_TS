import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../views/routs";
import { DASHBOARD, TICKETS, LOGIN_ROUTE } from "../utils/constants";
import { useSelector } from "react-redux";



export default function AppRouter() {
  const user = useSelector(state => state.user.id);
  // console.log(user);
  return user ? (
    <Routes>
      {privateRoutes.map(({ path, element }) => (
        <Route path={path} element={element} key={path} />
      ))}
      {/* <Route path="*" element={<Navigate to={TICKETS} />} /> */}
      <Route path="*" element={<Navigate to={DASHBOARD} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, element }) => (
        <Route path={path} element={element} key={path} />
      ))}
      <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
    </Routes>
  );
}
