import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import Wrapper from "./layout/Wrapper";
import RoutesList from "./routes";
import AdminWrapper from "./layout/Admin/Wrapper";
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
              <AdminWrapper>
                <Component />
              </AdminWrapper>
            ) : (
              <Navigate to="/login" />
            );
          case "private":
            return isLoggedIn ? (
              <Wrapper>
                <Component />
              </Wrapper>
            ) : (
              <Navigate to="/login" />
            );
          case "none":
            return <Component />;
          case "public":
          default:
            return (
              <Wrapper>
                <Component />
              </Wrapper>
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
