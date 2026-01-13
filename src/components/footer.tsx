import SjcButton from "@/components/sjc-button";
import logo from "./../../public/sjc_logo-removebg-preview.png"
import Image from "next/image";


export default function Footer() {

  return (
    <main>
      <div className="hidden w-full py-5  h-full md:flex flex-col gap-5 px-35  items-center justify-center bg-sky-200 ">
        {/*desktop*/}
        <div className="flex flex-row gap-5 items-center">
            <Image src={logo.src} height={50} width={50} alt="Science Journal Club logo" />
            <p className="text-base font-bold">Science Journal Club</p>
        </div>
        <p className="text-base">Page sponsored by Prof. Femi Oloye with 💙</p>
        
        
      </div>

      <div className="flex flex-col w-full md:hidden gap-5 p-5 bg-sky-200">
        <div className="flex flex-row gap-5">
          <Image src={logo.src} height={32} width={32} alt="Science Journal Club logo" />
          <p className="text-base">Science Journal Club</p>
        </div>
        <p className="text-base">Page sponsored by Prof. Femi Oloye with 💙</p>

      </div>
    </main>
    
  );
}
