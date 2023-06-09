import { Outlet} from "react-router-dom";
import { Link } from "react-router-dom";


export default function Root (){ 
    return(
<div>
    <nav className="flex justify-between p-8 bg-blue-400 items-center">
      <h1  className="text-4xl font-extrabold text-white"><Link to={"/"}>Home</Link></h1>
     
      <ul className="flex">
        <li><Link to={"/admin"}>Admin</Link></li>
     </ul>
     <h1 className="">
      
    </h1>
    </nav>
    <main className=" p-8">
    <Outlet/>
    </main>
  </div>

)};