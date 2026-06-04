import logo from "./../../public/sjc_logo-removebg-preview.png"
import Image from "next/image";
import LayoutContainer from "@/components/layout-container";


export default function Footer() {

  return (
    <main>
      <div className="hidden w-full bg-sky-200 md:flex">
        <LayoutContainer className="py-5">
          {/*desktop*/}
          <div className="flex flex-col gap-5 items-center justify-center">
            <div className="flex flex-row gap-5 items-center">
                <Image src={logo.src} height={50} width={50} alt="Science Journal Club logo" />
                <p className="text-base font-bold">Science Journal Club</p>
            </div>
          </div>
        </LayoutContainer>
      </div>

      <div className="flex w-full md:hidden bg-sky-200">
        <LayoutContainer className="py-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-5">
              <Image src={logo.src} height={32} width={32} alt="Science Journal Club logo" />
              <p className="text-base">Science Journal Club</p>
            </div>
          </div>
        </LayoutContainer>

      </div>
    </main>
    
  );
}
