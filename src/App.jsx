import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRightFromBracket,
  faArrowUpFromBracket,
  faCirclePlay,
  faMusic,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Dashboard } from "./modules/Dashboard";
import { SignIn } from "./modules/SignIn";
import { VerifyOtp } from "./modules/VerifyOtp";

library.add(faTrash);

library.add(faCirclePlay);

library.add(faMusic);

library.add(faArrowRightFromBracket);

library.add(faXmark);

library.add(faArrowUpFromBracket);

const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/verify-otp",
    element: <VerifyOtp />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <Navigate to="/sign-in" />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
