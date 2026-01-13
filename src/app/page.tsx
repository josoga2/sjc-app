import SjcButton from "@/components/sjc-button";
import Header from "@/components/header";
import { Atom, GraduationCap, HospitalIcon, Microscope } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import {heroImages} from "@/components/keynotes"
import Footer from "@/components/footer";
import Link from "next/link";
import EventPopup from "@/components/event-popup";
import Image from "next/image";


export default function Home({ id }: { id: string }) {

  return (
    <main className="w-full">
      <Header />
      <div key={id} className="hidden md:flex w-full flex-col md:max-w-5xl  md:m-auto md:justify-between">
        {/*desktop*/}
        <div className="grid w-full grid-cols-2 items-center gap-10  justify-stretch pt-10">

          <div className="flex flex-col gap-10 w-fit">
            <p className="text-4xl">Where discovery meets dialogue</p>
            <p className="text-base">{`A space where scientific breakthroughs are not only uncovered but clearly communicated. It represents the fusion of research, data, and meaningful conversation that drives innovation forward. Here, ideas are explored, shared, and transformed into knowledge that inspires progress.`}</p>
            <Link href={`#upcoming-events`}> <SjcButton type="primary" text="See Upcoming Events"/> </Link>
          </div>

          <div className="w-full border border-sky-100">
            {/**<img src={hero_slide_1.src} alt="Hero Image" className="w-full h-auto rounded-xl"/>*/}
            <HeroSlider slides={heroImages} />
          </div>
        </div>

        {/**Our people */}
        <div className="mt-20 flex flex-col gap-5 w-full items-center justify-center text-center bg-sky-50 py-10 ">
          <p className="text-lg font-bold pb-5">We are a community of:</p>
          <div className="flex flex-row items-start gap-24 justify-center">
            <div className="flex flex-col items-center justify-center gap-5">
              <Microscope size={50} className="mr-3 shrink-0" strokeWidth={1}/>
              <p className="text-base font-medium">Scientists</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-5">
              <GraduationCap size={50} className="mr-3 shrink-0" strokeWidth={1}/>
              <p className="text-base font-medium">Students</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-5" >
              <Atom size={50} className="mr-3 shrink-0" strokeWidth={1}/>
              <p className="text-base font-medium">Researchers</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-5">
              <HospitalIcon size={50} className="mr-3 font-thin shrink-0" strokeWidth={1}/>
              <p className="text-base font-medium">Clinicians</p>
            </div>
          </div>
        </div>


        {/**Features */}
        <div className="mt-20 flex flex-col gap-5 w-full items-center justify-center text-center  py-10 border-t  ">
          <p className="text-lg font-bold pb-5">Live Conversations with the World's Leading Scientists.</p>
          <p className="text-sm w-1/2">A premier monthly journal club that connects groundbreaking research with a global scientific community. We analyze high-impact research articles directly with the experts behind them.</p>
          <div className="flex flex-row items-start gap-24 justify-center text-start">
            <div className="flex flex-col items-start justify-start gap-2 p-3 rounded-md border border-sky-300 bg-sky-100 w-45 h-60 ">
              <Microscope size={25} className="shrink-0" strokeWidth={1}/>
              <p className="text-base font-medium">Direct Access</p>
              <p className="text-sm">Participate in live Q&A sessions with principal investigators,students, and authors of landmark papers.</p>
            </div>

            <div className="flex flex-col items-start justify-start gap-2 p-3 rounded-md border border-sky-300 bg-sky-100 h-60 w-45">
              <Microscope size={25} className="shrink-0" strokeWidth={1}/>
              <p className="text-base font-medium">Networking </p>
              <p className="text-sm">Connect with a global peer network of ambitious researchers.</p>
            </div>

            <div className="flex flex-col items-start justify-start gap-2 p-3 rounded-md border border-sky-300 bg-sky-100 h-60 w-45">
              <Microscope size={25} className="shrink-0" strokeWidth={1}/>
              <p className="text-base font-medium">Critical Discourse</p>
              <p className="text-sm">Participate in moderated discussions that challenge assumptions and promote collaboration thinking.</p>
            </div>

            <div className="flex flex-col items-start justify-start gap-2 p-3 rounded-md border border-sky-300 bg-sky-100 h-60 w-45">
              <Microscope size={25} className="shrink-0" strokeWidth={1}/>
              <p className="text-base font-medium">Deeper Insight</p>
              <p className="text-sm">Go beyond the manuscript to grasp the story behind the science; the hypotheses, challenges, and future directions</p>
            </div>

          </div>
        </div>

        {/**Upcoming */}
        <div className="mt-20 flex flex-col gap-5 w-full items-center justify-center text-center  py-10 border-t  " id="upcoming-events">
          <p className="text-lg font-bold pb-5">Upcoming Journal Club</p>
          <p className="text-sm w-1/2">A premier monthly journal club that connects groundbreaking research with a global scientific community. We analyze high-impact research articles directly with the experts behind them.</p>
          <div className="flex flex-row items-start gap-24 justify-center text-start">
            
            <div className="flex flex-row items-start justify-start gap-2 p-3 rounded-md border border-sky-300 bg-sky-100 w-4/5 ">
              <img src={heroImages[0].src} alt="Speaker Thumbnail" className="w-50 h-50 rounded-md shrink-0"/>
              <div className="flex flex-col gap-3">
                <p className="text-base font-medium">{heroImages[0].speaker}</p>
                <p className="text-sm">{heroImages[0].desc}</p>
                <p className="text-base font-medium">{heroImages[0].date}</p>
                <a className="underline text-sm font-bold" target="_blank" rel="noopener noreferrer" href={heroImages[0].youtube}>Watch Recording</a>
                <EventPopup description={heroImages[0].abstract} />
              </div>
            </div>

          </div>
        </div>

        <div className="mt-20 flex flex-col gap-5 w-full items-center justify-center text-center  py-10 border-t  ">
          <p className="text-lg font-bold pb-5">Our Past Events</p>
          <p className="text-sm w-1/2">Where innovators, creators, and thinkers come together to exchange ideas, spark collaboration, and inspire progress.</p>
          
          <div className="flex flex-row items-start gap-24 justify-center text-start">
            
            <div className="flex flex-row items-start justify-start gap-2 p-3 rounded-md border border-sky-300 bg-sky-100 w-4/5 ">
              <img src={heroImages[1].src} alt="Speaker Thumbnail" className="w-50 h-50 rounded-md shrink-0"/>
              <div className="flex flex-col gap-3">
                <p className="text-base font-medium">{heroImages[1].speaker}</p>
                <p className="text-sm">{heroImages[1].desc}</p>
                <p className="text-base font-medium">{heroImages[1].date}</p>
                <a className="underline text-sm font-bold" target="_blank" rel="noopener noreferrer" href={heroImages[1].youtube}>Watch Recording</a>
                <EventPopup description={heroImages[1].abstract} />
              </div>
            </div>

          </div>

          <div className="flex flex-row items-start gap-24 justify-center text-start">
            
            <div className="flex flex-row items-start justify-start gap-2 p-3 rounded-md border border-sky-300 bg-sky-100 w-4/5 ">
              <img src={heroImages[2].src} alt="Speaker Thumbnail" className="w-50 h-50 rounded-md shrink-0"/>
              <div className="flex flex-col gap-3">
                <p className="text-base font-medium">{heroImages[2].speaker}</p>
                <p className="text-sm">{heroImages[2].desc}</p>
                <p className="text-base font-medium">{heroImages[2].date}</p>
                <a className="underline text-sm font-bold" target="_blank" rel="noopener noreferrer" href={heroImages[2].youtube}>Watch Recording</a>
                <EventPopup description={heroImages[2].abstract} />
              </div>
            </div>

          </div>

          <div className="flex flex-row items-start gap-24 justify-center text-start">
            
            <Link href={'/past-events'}> <SjcButton type="primary" text="See More" /></Link>

          </div>
        </div>

        
        
      </div>

      {/**Mobile */}

      <div className="flex flex-col w-full md:hidden gap-5 p-5  rounded-xl">
          
          {/*desktop*/}
        <div className="grid w-full grid-row-2 items-center gap-10  justify-stretch pt-10">

          <div className="w-full border border-sky-100 justify-center items-center flex flex-col">
            <Image src={heroImages[0].src} alt={heroImages[0].alt} width={200} height={200} />
          </div>

          <div className="flex flex-col gap-10 w-fit">
            <p className="text-4xl">Where discovery meets dialogue</p>
            <p className="text-base">{`A space where scientific breakthroughs are not only uncovered but clearly communicated. It represents the fusion of research, data, and meaningful conversation that drives innovation forward. Here, ideas are explored, shared, and transformed into knowledge that inspires progress.`}</p>
            <Link href={`#upcoming-events`}> <SjcButton type="primary" text="See Upcoming Events"/> </Link>
          </div>

          
        </div>

        {/**Our people */}
        <div className="mt-20 flex flex-col gap-5 w-full items-center justify-center text-center bg-sky-50 py-10 ">
          <p className="text-lg font-bold pb-5">We are a community of:</p>
          <div className="flex flex-col items-center gap-10 justify-center">
            <div className="flex flex-col items-center justify-center gap-1">
              <Microscope size={50} className=" shrink-0" strokeWidth={1}/>
              <p className="text-base font-medium">Scientists</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-1">
              <GraduationCap size={50} className=" shrink-0" strokeWidth={1}/>
              <p className="text-base font-medium">Students</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-1" >
              <Atom size={50} className=" shrink-0" strokeWidth={1}/>
              <p className="text-base font-medium">Researchers</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-1">
              <HospitalIcon size={50} className=" font-thin shrink-0" strokeWidth={1}/>
              <p className="text-base font-medium">Clinicians</p>
            </div>
          </div>
        </div>


        {/**Features */}
        <div className="mt-20 flex flex-col gap-5 w-full items-center justify-center text-center  py-10 border-t  ">
          <p className="text-lg font-bold pb-5">Live Conversations with the World's Leading Scientists.</p>
          <p className="text-sm w-full">A premier monthly journal club that connects groundbreaking research with a global scientific community. We analyze high-impact research articles directly with the experts behind them.</p>
          <div className="flex flex-col items-start gap-5 justify-center text-start">
            <div className="flex flex-col items-center justify-center gap-2 p-3 rounded-md border border-sky-300 bg-sky-100 w-45 h-60 ">
              <Microscope size={25} className="shrink-0" strokeWidth={1}/>
              <p className="text-base font-medium">Direct Access</p>
              <p className="text-sm">Participate in live Q&A sessions with principal investigators,students, and authors of landmark papers.</p>
            </div>

            <div className="flex flex-col items-start justify-start gap-2 p-3 rounded-md border border-sky-300 bg-sky-100 h-60 w-45">
              <Microscope size={25} className="shrink-0" strokeWidth={1}/>
              <p className="text-base font-medium">Networking </p>
              <p className="text-sm">Connect with a global peer network of ambitious researchers.</p>
            </div>

            <div className="flex flex-col items-start justify-start gap-2 p-3 rounded-md border border-sky-300 bg-sky-100 h-60 w-45">
              <Microscope size={25} className="shrink-0" strokeWidth={1}/>
              <p className="text-base font-medium">Critical Discourse</p>
              <p className="text-sm">Participate in moderated discussions that challenge assumptions and promote collaboration thinking.</p>
            </div>

            <div className="flex flex-col items-start justify-start gap-2 p-3 rounded-md border border-sky-300 bg-sky-100 h-60 w-45">
              <Microscope size={25} className="shrink-0" strokeWidth={1}/>
              <p className="text-base font-medium">Deeper Insight</p>
              <p className="text-sm">Go beyond the manuscript to grasp the story behind the science; the hypotheses, challenges, and future directions</p>
            </div>

          </div>
        </div>

        {/**Upcoming */}
        <div className=" flex flex-col gap-5 w-full items-center justify-center text-center border-t" id="upcoming-events">
          <p className="text-lg font-bold pb-5">Upcoming Journal Club</p>
          <p className="text-sm ">A premier monthly journal club that connects groundbreaking research with a global scientific community. We analyze high-impact research articles directly with the experts behind them.</p>
          <div className="flex flex-col items-center gap-10 justify-center text-start">
            
            <div className="flex flex-col items-center justify-center gap-2 p-3 rounded-md border border-sky-300 bg-sky-100 w-4/5 ">
              <img src={heroImages[0].src} alt="Speaker Thumbnail" className="w-50 h-50 rounded-md shrink-0"/>
              <div className="flex flex-col gap-3">
                <p className="text-base font-medium">{heroImages[0].speaker}</p>
                <p className="text-sm">{heroImages[0].desc}</p>
                <p className="text-base font-medium">{heroImages[0].date}</p>
                <a className="underline text-sm font-bold" target="_blank" rel="noopener noreferrer" href={heroImages[0].youtube}>Watch Recording</a>
                <EventPopup description={heroImages[0].abstract} />
              </div>
            </div>

          </div>
        </div>

        <div className="mt-20 flex flex-col gap-5 w-full items-center justify-center text-center  py-10 border-t  ">
          <p className="text-lg font-bold pb-5">Our Past Events</p>
          <p className="text-sm w-full">Where innovators, creators, and thinkers come together to exchange ideas, spark collaboration, and inspire progress.</p>
          
          <div className="flex flex-col items-center gap-24 justify-center text-start">
            
            <div className="flex flex-col items-center justify-center gap-2 p-3 rounded-md border border-sky-300 bg-sky-100 w-4/5 ">
              <img src={heroImages[1].src} alt="Speaker Thumbnail" className="w-50 h-50 rounded-md shrink-0"/>
              <div className="flex flex-col gap-3">
                <p className="text-base font-medium">{heroImages[1].speaker}</p>
                <p className="text-sm">{heroImages[1].desc}</p>
                <p className="text-base font-medium">{heroImages[1].date}</p>
                <a className="underline text-sm font-bold" target="_blank" rel="noopener noreferrer" href={heroImages[1].youtube}>Watch Recording</a>
                <EventPopup description={heroImages[1].abstract} />
              </div>
            </div>

          </div>

          <div className="flex flex-col items-center gap-24 justify-center text-start">
            
            <div className="flex flex-col items-center justify-center gap-2 p-3 rounded-md border border-sky-300 bg-sky-100 w-4/5 ">
              <img src={heroImages[2].src} alt="Speaker Thumbnail" className="w-50 h-50 rounded-md shrink-0"/>
              <div className="flex flex-col gap-3">
                <p className="text-base font-medium">{heroImages[2].speaker}</p>
                <p className="text-sm">{heroImages[2].desc}</p>
                <p className="text-base font-medium">{heroImages[2].date}</p>
                <a className="underline text-sm font-bold" target="_blank" rel="noopener noreferrer" href={heroImages[2].youtube}>Watch Recording</a>
                <EventPopup description={heroImages[2].abstract} />
              </div>
            </div>

          </div>

          <div className="flex flex-col items-start gap-24 justify-center text-start">
            
            <Link href={'/past-events'}> <SjcButton type="primary" text="See More" /></Link>

          </div>
        </div>

        

      </div>
      <Footer />
    </main>
    
  );
}
