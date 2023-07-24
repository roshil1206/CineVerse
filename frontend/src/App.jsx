import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import PublicLayout from "./layout/PublicLayout";
import RoutesList from "./routes";
import AdminLayout from "./layout/AdminLayout";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { isLogin } from "./utils/functions";
import { useSelector } from "react-redux";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location]);

  const renderRoutes = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(isLogin());
    const { user } = useSelector((state) => state.authReducer);
    console.log("isAdmin", isAdmin);

    useEffect(() => {
      if (user) {
        setIsAdmin(user.role === "admin");
      }
      setIsLoggedIn(isLogin());
    }, [user]);

    const renderRoute = (Component, layout) => {
      if (Component) {
        switch (layout) {
          // case "admin":
          //   return isAdmin ? (
          //     <AdminWrapper>
          //       <Component />
          //     </AdminWrapper>
          //   ) : isLoggedIn ? (
          //     <Navigate to="/" />
          //   ) : (
          //     <Navigate to="/login" />
          //   );
          case "admin":
            return isLoggedIn ? (
              <AdminLayout>
                <Component />
              </AdminLayout>
            ) : (
              <Navigate to="/login" />
            );
          case "private":
            return isLoggedIn ? (
              <PublicLayout>
                <Component />
              </PublicLayout>
            ) : (
              <Navigate to="/login" />
            );
          case "none":
            return <Component />;
          case "public":
          default:
            return (
              <PublicLayout>
                <Component />
              </PublicLayout>
            );
        }
      }
      return null;
    };

    return RoutesList.map((route) => (
      <Route
        key={route.name}
        path={route.path}
        element={renderRoute(route.component, route.layout)}
      />
    ));
  };

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        {renderRoutes()}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
