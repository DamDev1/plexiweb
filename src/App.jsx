import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";


const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home/>
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