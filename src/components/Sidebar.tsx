import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    {path:"#",icons:<Home/>,content:'Home'},
    {path:"#",icons:<Home/>,content:'Home'},
    {path:"#",icons:<Home/>,content:'Home'},
    {path:"#",icons:<Home/>,content:'Home'},
    {path:"#",icons:<Home/>,content:'Home'},
    {path:"#",icons:<Home/>,content:'Home'},
  ];
  return (
    <div>
      <header className="flex flex-col items-center justify-center py-4 border-b border-gray-700 border-dashed">
        <img src="./docker.svg" alt="logo" className="w-24" />
        <h1 className="text-lg font-extrabold">Movie Time</h1>
      </header>
      <div className="p-2">
        {
          menuItems.map((item,index)=>(
            <div className={`p-4 text-sm sm:text-lg md:text-xl font-extrabold`} key={index}>
              <Link to={item.path} className={`flex items-center gap-3 hover:bg-blue-500 p-2 rounded-md shadow`}>
              {item.icons}
              {item.content}
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Sidebar