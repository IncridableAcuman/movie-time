import { LogOut } from "lucide-react";
import { toast } from "react-toastify";
import axiosInstnace from "../api/axios.api";
import { useNavigate } from "react-router-dom";
import { UseLoader } from "../provider/LoaderProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const { startLoading, stopLoading } = UseLoader();

  const handleSubmit = async () => {
    startLoading()
    try {
      const { data } = await axiosInstnace.post("/auth/logout");
      if (data) {
        localStorage.clear();
        await new Promise((resolve) => setTimeout(resolve, 2000));
        toast.success(data || "Successfully");
        navigate("/auth");
      }
    } catch (error) {
      toast.error(error?.message || "Logged out failed");
    }finally{
      stopLoading()
    }
  };

  return (
    <div className="flex items-center justify-around bg-black p-6 sticky z-40">
      <div className="">
        <h1 className="text-lg font-semibold text-red-500">MOVIE TIME</h1>
      </div>
      <div className="hidden md:block">
        <ul className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <li className="cursor-pointer hover:text-red-500 transition duration-300">
            Home
          </li>
          <li className="cursor-pointer hover:text-red-500 transition duration-300">
            Movie
          </li>
          <li className="cursor-pointer hover:text-red-500 transition duration-300">
            TV
          </li>
          <li className="cursor-pointer hover:text-red-500 transition duration-300">
            Trending
          </li>
        </ul>
      </div>
      <div className="text-red-500 cursor-pointer hover:text-red-600 transition duration-300">
        <LogOut onClick={()=>handleSubmit()} size={28} />
      </div>
    </div>
  );
};

export default Navbar;
