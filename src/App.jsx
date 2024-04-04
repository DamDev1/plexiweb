import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import OurWork from "./pages/OurWork";
import Service from "./pages/Service";


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
      },{
        path:"our-service",
        element: <Service/>
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