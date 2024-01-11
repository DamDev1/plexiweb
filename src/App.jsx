import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Works from "./pages/Works";


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