import SideBar from "../SideBar/SideBar"
import Header from "../common/Header/Header"
import { Outlet } from "react-router-dom"


const Layout = () => {
    return (
       <div>
        <Header />
            <main className="flex ">      
             <SideBar />
              <Outlet />
            </main> 
       </div>
    )
  }
  
  export default Layout