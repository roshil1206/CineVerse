import React from "react";
// import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
// import { Navigate, Route, Routes } from "react-router";
// import Cookies from "js-cookie";

import "./App.css";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import Wrapper from "./layout/Wrapper";
import MovieDetail from "./pages/MovieDetails";
import BookingWindow from "./pages/BookingWindow";
// import PrivateLayout from "./layout/PrivateLayout";
// import PublicLayout from "./layout/PublicLayout";
// import AdminLayout from "./layout/AdminLayout";
// import RoutesList from "./routes";

const App = () => {
  // const cookieData = Cookies.get("user");
  // const user = JSON.parse(cookieData === undefined ? "{}" : cookieData);

  // const renderRoutes = () => {
  //   const isLogin = !!user;
  //   const isAdmin = user?.isAdmin;
  //   const renderRoute = (Component, layout) => {
  //     if (Component) {
  //       switch (layout) {
  //         case "admin":
  //           return isAdmin ? (
  //             <AdminLayout>
  //               <Component />
  //             </AdminLayout>
  //           ) : isLogin ? (
  //             <Navigate to="/" />
  //           ) : (
  //             <Navigate to="/signin" />
  //           );
  //         case "private":
  //           return isLogin ? (
  //             <PrivateLayout>
  //               <Component />
  //             </PrivateLayout>
  //           ) : (
  //             <Navigate to="/signin" />
  //           );
  //         case "public":
  //         default:
  //           return (
  //             <PublicLayout>
  //               <Component />
  //             </PublicLayout>
  //           );
  //       }
  //     }
  //     return null;
  //   };

  //   return RoutesList.map((route) => (
  //     <Route
  //       key={route.name}
  //       path={route.path}
  //       element={renderRoute(route.component, route.layout)}
  //     />
  //   ));
  // };

  return (
    <div className="App">
      <Routes>
        {/* {renderRoutes()} */}

        <Route
          path="/"
          element={
            <Wrapper>
              <Landing />
            </Wrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <Wrapper>
              <Contact />
            </Wrapper>
          }
        />
        <Route
          path="/movies"
          element={
            <Wrapper>
              <MovieDetail />
            </Wrapper>
          }
        />
        <Route
          path="/booking"
          element={
            <Wrapper>
              <BookingWindow />
            </Wrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
