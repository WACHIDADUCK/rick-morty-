import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function layout() {    
    return ( 
        <div>
            <Navbar/>
            <Outlet />
            <h1>Footer</h1>
        </div>
    )
}