import Header from "@/components/header";
import Footer from "@/components/footer";
import SjcButton from "@/components/sjc-button";
import Link from "next/link";
import LayoutContainer from "@/components/layout-container";

type Scholarship = {
  title: string;
  status: "Open" | "Opening Soon" | "By Invitation" | "Closed";
  timeline: string;
  eligibility: string;
  benefit: string;
  description: string;
  url: string;
};

const scholarships: Scholarship[] = [
  {
    title: "Master Mind Scholarships (Study in Flanders)",
    status: "Open",
    timeline: "See official dates",
    eligibility: "See official criteria",
    benefit: "See official benefits",
    description:
      "Government-funded scholarships for outstanding international students pursuing master's programs in Flanders.",
    url: "https://www.studyinflanders.be/scholarships/master-mind-scholarships",
  },
  {
    title: "Study in Korea Scholarships",
    status: "Open",
    timeline: "See official dates",
    eligibility: "See official criteria",
    benefit: "See official benefits",
    description:
      "National scholarship opportunities for international students to study in Korea.",
    url: "https://www.studyinkorea.go.kr/ko/main.do?message=",
  },
  {
    title: "Eminent Master Programme",
    status: "Open",
    timeline: "See official dates",
    eligibility: "See official criteria",
    benefit: "See official benefits",
    description:
      "Joint master's program with important dates and application milestones.",
    url: "https://eminent-master.eu/important-dates/",
  },
];

const statusStyles: Record<Scholarship["status"], string> = {
  Open: "bg-emerald-100 text-emerald-700",
  "Opening Soon": "bg-amber-100 text-amber-700",
  "By Invitation": "bg-sky-100 text-sky-700",
  Closed: "bg-rose-100 text-rose-700",
};

function ScholarshipCard({ item }: { item: Scholarship }) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-md border border-sky-200 bg-white p-5">
      <div className="flex items-start justify-between gap-4">
        <p className="text-lg font-bold">{item.title}</p>
        <span
          className={`rounded-full px-2 py-1 text-xs font-semibold ${statusStyles[item.status]}`}
        >
          {item.status}
        </span>
      </div>
      <p className="text-sm text-slate-700">{item.description}</p>
      <div className="mt-auto">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md border-2 border-[#185CFF] px-4 py-1 text-sm font-bold text-[#185CFF] transition-colors hover:bg-[#185CFF] hover:text-white"
        >
          Visit Scholarship
        </a>
      </div>
    </div>
  );
}

export default function ScholarshipsPage() {
  return (
    <main className="w-full">
      <Header />
      <LayoutContainer className="py-10">
        <div className="hidden w-full h-full md:flex flex-col gap-8 items-center justify-center">
          <div className="w-full">
            <div className="h-40 bg-sky-100 w-full items-center gap-3 flex flex-col justify-center text-center">
              <p className="font-bold text-3xl">Scholarships</p>
              <p className="text-base max-w-2xl">
                Support programs that expand access to SJC meetings, mentorship,
                and scientific community-building.
              </p>
            </div>

            <div className="mt-10 grid w-full grid-cols-3 gap-6">
              {scholarships.map((item) => (
                <ScholarshipCard key={item.title} item={item} />
              ))}
            </div>

            
          </div>
        </div>

        <div className="flex flex-col w-full md:hidden gap-6">
          <div className="h-40 bg-sky-100 w-full items-center gap-3 flex flex-col justify-center text-center px-4">
            <p className="font-bold text-3xl">Scholarships</p>
            <p className="text-base">
              Support programs that expand access to SJC meetings and mentorship.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {scholarships.map((item) => (
              <ScholarshipCard key={item.title} item={item} />
            ))}
          </div>

          <div className="w-full rounded-md border border-sky-200 bg-sky-50 p-5">
            <p className="text-lg font-bold">How It Works</p>
            <div className="mt-4 flex flex-col gap-4 text-sm text-slate-700">
              <div className="rounded-md border border-sky-200 bg-white p-4">
                <p className="font-semibold">1. Pick a scholarship</p>
                <p>Review eligibility and select the program that fits you.</p>
              </div>
              <div className="rounded-md border border-sky-200 bg-white p-4">
                <p className="font-semibold">2. Request details</p>
                <p>Submit the contact form and share your goals and needs.</p>
              </div>
              <div className="rounded-md border border-sky-200 bg-white p-4">
                <p className="font-semibold">3. Get a response</p>
                <p>We will follow up with next steps and timelines.</p>
              </div>
            </div>
          </div>
        </div>
      </LayoutContainer>
      <Footer />
    </main>
  );
}
