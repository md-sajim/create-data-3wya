import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./componant/Home/Home/Home";
import Blog from "./componant/Pages/Blog/Blog";
import Main from "./Layout/Main";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element:<Home></Home>
        },
        {
          path:"/blog",
          element:<Blog></Blog>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={route}>
      
    </RouterProvider>
  );
}

export default App;
