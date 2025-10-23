import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="w-full min-h-screen pt-24">
        <div className="pdg">
          <Image src={"/pexel.jpg"} alt="image" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
