import { Loader2 } from "lucide-react";
import { UseLoader } from "../provider/LoaderProvider";

const Loader = () => {
  const { isLoading } = UseLoader();
  if (!isLoading) return null;
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 w-full h-screen bg-black text-red-500">
        <Loader2 size={50} className="h-16 w-16 animate-spin" />
      </div>
    );
};

export default Loader;
