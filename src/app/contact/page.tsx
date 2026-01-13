import Header from "@/components/header";
import SjcButton from "@/components/sjc-button";
import {heroImages} from "@/components/keynotes"
import Footer from "@/components/footer";



export default function PastEvent() {

  return (
    <main className="w-full">
        <Header />
      <div className="hidden w-full py-10  h-full md:flex flex-col gap-5 px-10  items-center justify-center  ">
        {/*desktop*/}
        <div className="w-full">
            <div className="h-40 bg-sky-100 w-full items-center px-3  gap-5 flex flex-col justify-center">
                <p className="font-bold text-3xl">Write to us</p>
                <p className="font-bold text-base">Ask about speaking opportunities and how to be a member.</p>
            </div>
            
            <div className="flex flex-col gap-10 pt-10 items-center justify-center h-full w-full">
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf9p_EnmMGvJayY7qgpOEaa0N0T1kjq5LhACsGwkXbfjs6ppw/viewform?embedded=true" width="700" height="800" >Loading…</iframe>
            </div>
        </div>

        
      </div>

      <div className="flex flex-col w-full md:hidden gap-5 p-5  ">
          <div className="w-full">
            <div className="h-40 bg-sky-100 w-full text-center items-center px-3 gap-5 flex flex-col justify-center">
                <p className="font-bold text-3xl">Write to us</p>
                <p className=" text-base">Ask about speaking opportunities and how to be a member.</p>
            </div>
            
            <div className="flex flex-col gap-10 pt-10 items-center justify-center h-full w-full">
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf9p_EnmMGvJayY7qgpOEaa0N0T1kjq5LhACsGwkXbfjs6ppw/viewform?embedded=true" width="300" height="800" >Loading…</iframe>
            </div>
        </div>
      </div>
      <Footer/>
    </main>
    
  );
}
