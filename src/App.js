import LoginPage from "./components/Login";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <LoginPage />,
      errorElement: <Error />,
    }
  ])
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
