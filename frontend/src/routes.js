import SignIn from "./pages/Auth/SignIn";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    layout: "public",
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
    layout: "public",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    layout: "private",
  },
  {
    path: "/admin-dashboard",
    name: "AdminDashboard",
    component: AdminDashboard,
    layout: "admin",
  },
];

export default routes;
