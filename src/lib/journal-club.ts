import { type EventItem } from "@/components/event-list";

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

export async function getJournalClubEvents(): Promise<EventItem[]> {
  try {
    const response = await fetch(SESSIONS_API_URL, {
      cache: "no-store",
    });

    if (!response.ok) {
      return [];
    }

    const sessions = (await response.json()) as JournalClubSession[];

    return sessions
      .slice()
      .sort(
        (first, second) =>
          new Date(second.date_added).getTime() -
          new Date(first.date_added).getTime(),
      )
      .map(sessionToEvent);
  } catch {
    return [];
  }
}
