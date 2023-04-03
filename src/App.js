import LoginPage from "./pages/Login";
import Verify from "./pages/Verify";
import Error from "./pages/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <LoginPage />,
      errorElement: <Error />,
    },
    {
      path: "/verify",
      element: <Verify />
    }
  ])
  return (
    <>
    <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
