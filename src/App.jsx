import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import OurWork from "./pages/OurWork";


const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path:"privacy",
        element: <Privacy/>
      },
      {
        path:"our-work",
        element:<OurWork/>
      }
    ]
  }
])

function App(){

  return(
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App

// gsap