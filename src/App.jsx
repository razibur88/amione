

import Layoutt from "./components/root/Layoutt"
import Aboutus from "./pages/Aboutus"
import Home from "./pages/Home"
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom"
import Pricing from "./pages/Pricing"
import Extra from "./pages/Extra"

const router = createBrowserRouter (createRoutesFromElements(
  <Route element={<Layoutt/>} >
    <Route path="/" element={<Home/>}> </Route>
    <Route path="/aboutus" element={<Aboutus/>}> </Route>
    <Route path="/pricing" element={<Pricing/>}> </Route>
    <Route path="/extra" element={<Extra/>}> </Route>
  
  </Route>
))

function App() {


  return (
    <>
      <RouterProvider router={router}></RouterProvider> 
    </>
  )
}

export default App
