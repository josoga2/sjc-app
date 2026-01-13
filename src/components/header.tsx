import SjcButton from "@/components/sjc-button";
import logo from "./../../public/sjc_logo-removebg-preview.png"
import Image from "next/image";
import Link from "next/link";


export default function Header() {

  return (
    <main>
      <div className="hidden w-full py-5  h-full md:flex flex-col gap-5 px-35  items-start justify-start bg-sky-200 ">
        {/*desktop*/}
        <div className="flex flex-row justify-between w-full items-center">
          <Link href={'/'}><div className="flex flex-row gap-5 items-center">
              <Image src={logo.src} height={50} width={50} alt="Science Journal Club logo" />
              <p className="text-base font-black">Science Journal Club</p>
          </div></Link>

          <div className="flex flex-row gap-5 justify-between items-center">
            <Link href={`/#upcoming-events`}>Upcoming Meeting</Link>
            <Link href={`past-events`}>Past Meetings</Link>
            <Link href={`contact`}>Contact Us</Link>
             
          </div>
        </div>
        
        
      </div>

      <div className="flex flex-col w-full md:hidden gap-5 p-5   bg-sky-200">
           <Link href={'/'}><div className="flex flex-row gap-5 items-center">
            <Image src={logo.src} height={32} width={32} alt="Science Journal Club logo" />
            <p className="text-base font-black">Science Journal Club</p>
        </div></Link>
      </div>
    </main>
    
  );
}
