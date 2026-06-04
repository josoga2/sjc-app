import Header from "@/components/header";
import SjcButton from "@/components/sjc-button";
import Footer from "@/components/footer";
import Link from "next/link";
import LayoutContainer from "@/components/layout-container";
import EventList from "@/components/event-list";
import { getJournalClubEvents } from "@/lib/journal-club";

export const dynamic = "force-dynamic";

export default async function PastEvent() {
  const events = await getJournalClubEvents();

  return (
    <main className="w-full">
        <Header />
      <LayoutContainer className="py-10">
        <div className="hidden w-full h-full md:flex flex-col gap-5  items-center justify-center  ">
          {/*desktop*/}
          <div className="w-full">
              <div className="h-40 bg-sky-100 w-full items-center  gap-5 flex flex-col justify-center">
                  <p className="font-bold text-3xl">Past Events</p>
                  <p className="font-bold text-base">Watch recordings of our previous meetings</p>
              </div>
              
              {events.length > 0 ? (
                <EventList
                  events={events}
                  className="grid w-full grid-cols-2 gap-6 pt-10 text-start"
                />
              ) : (
                <p className="pt-10 text-center text-sm text-slate-600">
                  Past events are not available right now. Please check back soon.
                </p>
              )}
          </div>


          <Link href={`/contact`}> <SjcButton type="primary" text="Write us to be a speaker"/> </Link>
          
        </div>

        <div className="flex flex-col w-full md:hidden gap-5  items-center text-center">
            <div className="w-full">
            <div className="h-40 bg-sky-100 w-full items-center px-2 text-center gap-5 flex flex-col justify-center">
                <p className="font-bold text-3xl">Past Events</p>
                <p className=" text-base">Watch recordings of our previous meetings</p>
            </div>
            
            {events.length > 0 ? (
              <EventList
                events={events}
                className="grid w-full grid-cols-1 gap-6 pt-10 text-start"
              />
            ) : (
              <p className="pt-10 text-center text-sm text-slate-600">
                Past events are not available right now. Please check back soon.
              </p>
            )}
        </div>


          <Link href={`/contact`}> <SjcButton type="primary" text="Write us to be a speaker"/> </Link>
        </div>
      </LayoutContainer>
      <Footer/>
    </main>
    
  );
}
