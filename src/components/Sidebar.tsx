import { Home, PersonStanding, Tv, Tv2, Video } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    {path:"/",icons:<Home/>,content:'Home'},
    {path:"/movies",icons:<Tv/>,content:'Movies'},
    {path:"/tv",icons:<Video/>,content:'TV Shows'},
    {path:"/series",icons:<Tv2/>,content:'Series'},
    {path:"/kids",icons:<PersonStanding/>,content:'Kids'},
  ];
  return (
    <div>
      <header className="flex flex-col items-center justify-center py-4 border-b border-gray-700 border-dashed">
        <img src="./netflix.png" alt="logo" className="w-24" />
      </header>
      <div className="p-2">
        {
          menuItems.map((item,index)=>(
            <div className={`p-4 text-sm sm:text-lg md:text-xl font-extrabold`} key={index}>
              <Link to={item.path} className={`flex items-center gap-3 hover:bg-pink-600 p-2 rounded-md shadow-lg hover:shadow-pink-600 transition duration-300`}>
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