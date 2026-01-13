import Header from "@/components/header";
import SjcButton from "@/components/sjc-button";
import {heroImages} from "@/components/keynotes"
import Footer from "@/components/footer";
import Link from "next/link";
import EventPopup from "@/components/event-popup";



export default function PastEvent() {

  return (
    <main className="w-full">
        <Header />
      <div className="hidden w-full py-10  h-full md:flex flex-col gap-5 px-10  items-center justify-center  ">
        {/*desktop*/}
        <div className="w-full">
            <div className="h-40 bg-sky-100 w-full items-center  gap-5 flex flex-col justify-center">
                <p className="font-bold text-3xl">Past Events</p>
                <p className="font-bold text-base">Watch recordings of our previous meetings</p>
            </div>
            
            <div className="flex flex-col gap-10 pt-10">
            {heroImages.map((speaker, idx) => (
                <div key={idx}>
                    <div className="flex flex-row items-start gap-24 justify-center text-start">
            
                        <div className="flex flex-row items-start justify-start gap-2 p-3 rounded-md border border-sky-300 bg-sky-100 w-4/5 ">
                        <img src={speaker.src} alt="Speaker Thumbnail" className="w-50 h-50 rounded-md shrink-0"/>
                        <div className="flex flex-col gap-3">
                            <p className="text-base font-medium">{speaker.speaker}</p>
                            <p className="text-sm">{speaker.desc}</p>
                            <p className="text-base font-medium">{speaker.date}</p>
                            <a className="underline text-sm font-bold" target="_blank" rel="noopener noreferrer" href={speaker.youtube}>Watch Recording</a>
                            <EventPopup description={speaker.abstract} />
                        </div>
                        </div>

                    </div>
                </div>
            ))}
            </div>
        </div>


        <Link href={`/contact`}> <SjcButton type="primary" text="Write us to be a speaker"/> </Link>
        
      </div>

      <div className="flex flex-col w-full md:hidden gap-5  items-center text-center">
          <div className="w-full">
            <div className="h-40 bg-sky-100 w-full items-center px-2 text-center gap-5 flex flex-col justify-center">
                <p className="font-bold text-3xl">Past Events</p>
                <p className=" text-base">Watch recordings of our previous meetings</p>
            </div>
            
            <div className="flex flex-col gap-10 pt-10">
            {heroImages.map((speaker, idx) => (
                <div key={idx}>
                    <div className="flex flex-col items-center gap-24 justify-center text-start">
            
                        <div className="flex flex-col items-start justify-start gap-2 p-3 rounded-md border border-sky-300 bg-sky-100 w-4/5 ">
                        <img src={speaker.src} alt="Speaker Thumbnail" className="w-50 h-50 rounded-md shrink-0"/>
                        <div className="flex flex-col gap-3">
                            <p className="text-base font-medium">{speaker.speaker}</p>
                            <p className="text-sm">{speaker.desc}</p>
                            <p className="text-base font-medium">{speaker.date}</p>
                            <a className="underline text-sm font-bold" target="_blank" rel="noopener noreferrer" href={speaker.youtube}>Watch Recording</a>
                            <EventPopup description={speaker.abstract} />
                        </div>
                        </div>

                    </div>
                </div>
            ))}
            </div>
        </div>


        <Link href={`/contact`}> <SjcButton type="primary" text="Write us to be a speaker"/> </Link>
      </div>
      <Footer/>
    </main>
    
  );
}
