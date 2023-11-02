import { Outlet } from "react-router-dom"
import MainLayout from "./Componants/layout/MainLayout"



function App() {
 

  return (
    <>
      <h2 className="text-center text-2xl">Clean Co.</h2>
      <MainLayout>
        <Outlet></Outlet>
      </MainLayout>
        
    </>
  )
}

export default App
