import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import Wrapper from "./layout/Wrapper";
import RoutesList from "./routes";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  // const cookieData = Cookies.get("user");
  // const user = JSON.parse(cookieData === undefined ? "{}" : cookieData);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location]);

  const renderRoutes = () => {
    // const isLogin = !!user;
    // const isAdmin = user?.isAdmin;
    const renderRoute = (Component, layout) => {
      if (Component) {
        switch (layout) {
          // case "admin":
          //   return isAdmin ? (
          //     <AdminLayout>
          //       <Component />
          //     </AdminLayout>
          //   ) : isLogin ? (
          //     <Navigate to="/" />
          //   ) : (
          //     <Navigate to="/signin" />
          //   );
          // case "private":
          //   return isLogin ? (
          //     <PrivateLayout>
          //       <Component />
          //     </PrivateLayout>
          //   ) : (
          //     <Navigate to="/signin" />
          //   );
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
      <Routes>{renderRoutes()}</Routes>
    </div>
  );
};

export default App;
