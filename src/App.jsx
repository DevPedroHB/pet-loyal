import { RouterProvider } from "react-router-dom";
import { AuthContextProvider } from "./contexts/auth-context";
import { router } from "./routes";

export function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}
