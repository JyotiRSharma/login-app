import LoginPage from "./components/Login";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./components/Blog";
import { useContext, useState } from "react";
import BlogContext from "./utils/BlogContext";

function App() {
  const [user, setUser] = useState({
    ReactBlog: {
      author: "Jyoti",
      contact: 88888,
    },
  });
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
      errorElement: <Error />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
  ]);
  return (
    <BlogContext.Provider value={user}>
      <RouterProvider router={appRouter} />
    </BlogContext.Provider>
  );
}

export default App;
