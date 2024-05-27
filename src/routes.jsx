import { createBrowserRouter } from "react-router-dom";
import { CreatePet } from "./pages/app/create-pet";
import { Home } from "./pages/app/home";
import { UpdatePet } from "./pages/app/update-pet";
import { SignIn } from "./pages/auth/sign-in";
import { SignUp } from "./pages/auth/sign-up";
import { NotFound } from "./pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create-pet",
    element: <CreatePet />,
  },
  {
    path: "/update-pet/:id",
    element: <UpdatePet />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
