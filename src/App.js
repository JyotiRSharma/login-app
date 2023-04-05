import LoginPage from "./components/Login";
import Verify from "./components/Verify";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <LoginPage />,
      errorElement: <Error />,
    }
  ])
  return (
    <Provider store={store}>
    <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
