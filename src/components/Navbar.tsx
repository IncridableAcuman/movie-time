import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    {path:'#',text:'All'},
    {path:'#',text:'HD'},
    {path:'#',text:'Favorites'},
    {path:'#',text:'Movies'},
    {path:'#',text:'Sports'},
    {path:'#',text:'Drama'},
    {path:'#',text:'News'},
    {path:'#',text:'Kids'},
  ];
  return (
    <div className="flex items-center justify-center">
      <div className=" w-full  max-w-2xl  bg-gray-900 border  border-gray-800 text-white font-extrabold flex items-center justify-between gap-3 py-2.5 px-4 rounded-full shadow-2xl shadow-cyan-500
       hover:shadow-pink-500 transition duration-300">
        {
          navItems.map((item,index)=>(
            <div className="flex items-center gap-3 hover:text-pink-500 transition duration-300" key={index}>
              <Link className="hidden md:block" to={item.path}>{item.text}</Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Navbar