import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Privacy from "./pages/Privacy";


const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },{
        path: 'works',
        element: <Works />
      },
      {
        path:"privacy",
        element: <Privacy/>
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