import SjcButton from "@/components/sjc-button";
import Header from "@/components/header";
import { Atom, GraduationCap, HospitalIcon, Microscope } from "lucide-react";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import LayoutContainer from "@/components/layout-container";
import EventList from "@/components/event-list";
import { getJournalClubEvents } from "@/lib/journal-club";

export const dynamic = "force-dynamic";

const featureCards = [
  {
    title: "Direct Access",
    description:
      "Participate in live Q&A sessions with principal investigators, students, and authors of landmark papers.",
    image: "/features_images/6229405.jpg",
  },
  {
    title: "Networking",
    description:
      "Connect with a global peer network of ambitious researchers.",
    image: "/features_images/6229635.jpg",
  },
  {
    title: "Deeper Insight",
    description:
      "Go beyond the manuscript to grasp the story behind the science; the hypotheses, challenges, and future directions.",
    image: "/features_images/6229405.jpg",
  },
];

const communityItems = [
  {
    label: "Scientists",
    Icon: Microscope,
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    label: "Students",
    Icon: GraduationCap,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    label: "Researchers",
    Icon: Atom,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    label: "Clinicians",
    Icon: HospitalIcon,
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
];

export default async function Home() {
  const journalClubEvents = await getJournalClubEvents();
  const upcomingEvent = journalClubEvents[0];
  const pastEventPreview = journalClubEvents.slice(1, 3);

  return (
    <main className="w-full">
      <Header />
      <LayoutContainer className="py-10">
        <div className="hidden md:flex w-full flex-col md:justify-between">
          {/*desktop*/}
          <div className="grid w-full grid-cols-2 items-center gap-10  justify-stretch pt-10">

            <div className="flex flex-col gap-10 w-fit">
              <p className="text-4xl">Where discovery meets dialogue</p>
              <p className="text-base">{`A space where scientific breakthroughs are not only uncovered but clearly communicated. It represents the fusion of research, data, and meaningful conversation that drives innovation forward. Here, ideas are explored, shared, and transformed into knowledge that inspires progress.`}</p>
              <Link href={`#upcoming-events`}> <SjcButton type="primary" text="See Upcoming Events"/> </Link>
            </div>

            <div className="w-full border border-sky-100">
              {/**<HeroSlider slides={heroImages} />*/}
              <Image
                src="/6212545.jpg"
                alt="Science Journal Club hero"
                width={1400}
                height={900}
                className="w-full h-auto rounded-xl object-cover"
                priority
              />
            </div>
          </div>

          {/**Our people */}
          <div className="mt-20 flex flex-col gap-8 w-full items-center justify-center text-center bg-sky-50 py-10 rounded-2xl border border-sky-100">
            <p className="text-lg font-bold pb-5">We are a community of:</p>
            <div className="grid w-full grid-cols-4 gap-6 px-6">
              {communityItems.map(({ label, Icon, color, bg }, index) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white px-6 py-5 text-left shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${bg}`}>
                    <Icon size={28} className={`${color}`} strokeWidth={1.6} />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-2xl font-semibold text-slate-900">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="text-sm font-medium text-slate-600">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/**Features */}
          <div className="mt-20 flex flex-col gap-5 w-full items-center justify-center text-center  py-10 border-t  ">
            <p className="text-lg font-bold pb-5">Live Conversations with the World&apos;s Leading Scientists.</p>
            <p className="text-sm w-1/2">A premier monthly journal club that connects groundbreaking research with a global scientific community. We analyze high-impact research articles directly with the experts behind them.</p>
            <div className="grid w-full grid-cols-3 gap-6 text-start">
              {featureCards.map((feature) => (
                <div
                  key={feature.title}
                  className="group flex h-full flex-col gap-4 rounded-xl border border-sky-200 bg-white p-5 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={500}
                      height={320}
                      className="h-40 w-full object-cover transition-transform duration-300 group-hover:animate-bounce"
                    />
                  </div>
                  <p className="text-lg font-bold">{feature.title}</p>
                  <p className="text-sm text-slate-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/**Upcoming */}
          <div className="mt-20 flex flex-col gap-5 w-full items-center justify-center text-center  py-10 border-t  " id="upcoming-events">
            <p className="text-lg font-bold pb-5">Upcoming Journal Club</p>
            <p className="text-sm w-1/2">A premier monthly journal club that connects groundbreaking research with a global scientific community. We analyze high-impact research articles directly with the experts behind them.</p>
            {upcomingEvent ? (
              <EventList
                events={[upcomingEvent]}
                variant="featured"
                badge="Upcoming"
                className="grid w-full grid-cols-1 text-start"
              />
            ) : (
              <p className="text-sm text-slate-600">
                Upcoming journal club details are not available right now.
              </p>
            )}
          </div>

          <div className="mt-20 flex flex-col gap-5 w-full items-center justify-center text-center  py-10 border-t  ">
            <p className="text-lg font-bold pb-5">Our Past Events</p>
            <p className="text-sm w-1/2">Where innovators, creators, and thinkers come together to exchange ideas, spark collaboration, and inspire progress.</p>
            {pastEventPreview.length > 0 ? (
              <EventList
                events={pastEventPreview}
                className="grid w-full grid-cols-2 gap-6 text-start"
              />
            ) : (
              <p className="text-sm text-slate-600">
                Past event previews are not available right now.
              </p>
            )}

            <div className="flex flex-row items-start gap-24 justify-center text-start">
              
              <Link href={'/past-events'}> <SjcButton type="primary" text="See More" /></Link>

            </div>
          </div>

          
          
        </div>

        {/**Mobile */}

        <div className="flex flex-col w-full md:hidden gap-5 rounded-xl">
            
            {/*desktop*/}
          <div className="grid w-full grid-row-2 items-center gap-10  justify-stretch pt-10">

            <div className="w-full border border-sky-100 justify-center items-center flex flex-col">
              <Image
                src="/6212545.jpg"
                alt="Science Journal Club hero"
                width={400}
                height={260}
                className="rounded-xl object-cover"
                priority
              />
            </div>

            <div className="flex flex-col gap-10 w-fit">
              <p className="text-4xl">Where discovery meets dialogue</p>
              <p className="text-base">{`A space where scientific breakthroughs are not only uncovered but clearly communicated. It represents the fusion of research, data, and meaningful conversation that drives innovation forward. Here, ideas are explored, shared, and transformed into knowledge that inspires progress.`}</p>
              <Link href={`#upcoming-events`}> <SjcButton type="primary" text="See Upcoming Events"/> </Link>
            </div>

            
          </div>

          {/**Our people */}
          <div className="mt-20 flex flex-col gap-6 w-full items-center justify-center text-center bg-sky-50 py-8 rounded-2xl border border-sky-100">
            <p className="text-lg font-bold pb-5">We are a community of:</p>
            <div className="grid w-full grid-cols-2 gap-4 px-4">
              {communityItems.map(({ label, Icon, color, bg }, index) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-4 text-left shadow-[0_12px_28px_rgba(15,23,42,0.08)]"
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${bg}`}>
                    <Icon size={24} className={`${color}`} strokeWidth={1.6} />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xl font-semibold text-slate-900">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="text-xs font-medium text-slate-600">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


        {/**Features */}
        <div className="mt-20 flex flex-col gap-5 w-full items-center justify-center text-center  py-10 border-t  ">
          <p className="text-lg font-bold pb-5">Live Conversations with the World&apos;s Leading Scientists.</p>
          <p className="text-sm w-full">A premier monthly journal club that connects groundbreaking research with a global scientific community. We analyze high-impact research articles directly with the experts behind them.</p>
          <div className="flex flex-col items-start gap-6 justify-center text-start w-full">
            {featureCards.map((feature) => (
              <div
                key={feature.title}
                className="group flex w-full flex-col gap-4 rounded-xl border border-sky-200 bg-white p-5 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={500}
                    height={320}
                    className="h-40 w-full object-cover transition-transform duration-300 group-hover:animate-bounce"
                  />
                </div>
                <p className="text-lg font-bold">{feature.title}</p>
                <p className="text-sm text-slate-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/**Upcoming */}
        <div className=" flex flex-col gap-5 w-full items-center justify-center text-center border-t" id="upcoming-events">
          <p className="text-lg font-bold pb-5">Upcoming Journal Club</p>
          <p className="text-sm ">A premier monthly journal club that connects groundbreaking research with a global scientific community. We analyze high-impact research articles directly with the experts behind them.</p>
          {upcomingEvent ? (
            <EventList
              events={[upcomingEvent]}
              variant="featured"
              badge="Upcoming"
              className="grid w-full grid-cols-1 gap-6 text-start"
            />
          ) : (
            <p className="text-sm text-slate-600">
              Upcoming journal club details are not available right now.
            </p>
          )}
        </div>

        <div className="mt-20 flex flex-col gap-5 w-full items-center justify-center text-center  py-10 border-t  ">
          <p className="text-lg font-bold pb-5">Our Past Events</p>
          <p className="text-sm w-full">Where innovators, creators, and thinkers come together to exchange ideas, spark collaboration, and inspire progress.</p>
          {pastEventPreview.length > 0 ? (
            <EventList
              events={pastEventPreview}
              className="grid w-full grid-cols-1 gap-6 text-start"
            />
          ) : (
            <p className="text-sm text-slate-600">
              Past event previews are not available right now.
            </p>
          )}

          <div className="flex flex-col items-start gap-24 justify-center text-start">
            
            <Link href={'/past-events'}> <SjcButton type="primary" text="See More" /></Link>

          </div>
        </div>

        

      </div>
      </LayoutContainer>
      <Footer />
    </main>
    
  );
}
