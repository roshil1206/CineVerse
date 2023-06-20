import Landing from "./pages/Landing";
import MovieDetails from "./pages/MovieDetails";
import BookingWindow from "./pages/BookingWindow";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Landing,
    layout: "public",
  },
  {
    path: "/movies",
    name: "Movies",
    component: MovieDetails,
    layout: "public",
  },
  {
    path: "/booking",
    name: "Booking",
    component: BookingWindow,
    layout: "public",
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    layout: "public",
  },
  {
    path: "/faq",
    name: "FAQ",
    component: FAQ,
    layout: "public",
  },
];

export default routes;
