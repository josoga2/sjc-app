import Header from "@/components/header";
import SjcButton from "@/components/sjc-button";
import Footer from "@/components/footer";
import Link from "next/link";
import LayoutContainer from "@/components/layout-container";
import EventList, { type EventItem } from "@/components/event-list";

type JournalClubSession = {
  id: number;
  speaker_name: string;
  paper_name: string;
  abstract: string;
  image: string;
  image_url: string;
  recording_link: string;
  date_added: string;
};

const SESSIONS_API_URL = "https://api.thehackbio.com/api/journal-club/sessions/";

export const dynamic = "force-dynamic";

function formatSessionDate(dateAdded: string) {
  const date = new Date(dateAdded);

  if (Number.isNaN(date.getTime())) {
    return "Date unavailable";
  }

  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeZone: "UTC",
  }).format(date);
}

function sessionToEvent(session: JournalClubSession): EventItem {
  return {
    src: session.image_url || session.image || "/6212545.jpg",
    alt: session.speaker_name,
    speaker: session.speaker_name,
    desc: session.paper_name,
    date: formatSessionDate(session.date_added),
    youtube: session.recording_link || undefined,
    abstract: session.abstract,
  };
}

async function getPastEvents(): Promise<EventItem[]> {
  try {
    const response = await fetch(SESSIONS_API_URL, {
      cache: "no-store",
    });

    if (!response.ok) {
      return [];
    }

    const sessions = (await response.json()) as JournalClubSession[];

    return sessions.map(sessionToEvent);
  } catch {
    return [];
  }
}

export default async function PastEvent() {
  const events = await getPastEvents();

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
