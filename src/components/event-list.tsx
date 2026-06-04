import Image from "next/image";
import EventPopup from "@/components/event-popup";

export type EventItem = {
  src: string;
  alt?: string;
  speaker: string;
  desc: string;
  date: string;
  youtube?: string;
  abstract: string;
};

type EventCardProps = {
  event: EventItem;
  variant?: "default" | "featured";
  badge?: string;
};

type EventListProps = {
  events: EventItem[];
  className?: string;
  variant?: "default" | "featured";
  badge?: string;
};

const variantStyles = {
  default: {
    imageHeight: "h-48",
    title: "text-lg",
  },
  featured: {
    imageHeight: "h-56",
    title: "text-xl",
  },
};

function EventCard({ event, variant = "default", badge }: EventCardProps) {
  const styles = variantStyles[variant];

  return (
    <div className="group flex h-full flex-col rounded-2xl border border-sky-200 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className={`relative w-full ${styles.imageHeight} overflow-hidden rounded-t-2xl`}>
        <Image
          src={event.src}
          alt={event.alt || event.speaker}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-500">
          {badge ? (
            <span className="rounded-full bg-sky-100 px-2 py-1 text-[10px] font-bold text-sky-700">
              {badge}
            </span>
          ) : (
            <span className="text-[10px]">Journal Club</span>
          )}
          <span>{event.date}</span>
        </div>
        <p className={`${styles.title} font-bold text-slate-900`}>{event.speaker}</p>
        <p className="text-sm text-slate-600">{event.desc}</p>
        <div className="mt-auto flex flex-wrap items-center gap-3 text-sm">
          {event.youtube ? (
            <a
              className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 transition-colors hover:bg-sky-100"
              target="_blank"
              rel="noopener noreferrer"
              href={event.youtube}
            >
              Watch Recording
            </a>
          ) : (
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500">
              Recording Coming Soon
            </span>
          )}
          <EventPopup description={event.abstract} />
        </div>
      </div>
    </div>
  );
}

export default function EventList({
  events,
  className = "",
  variant = "default",
  badge,
}: EventListProps) {
  return (
    <div className={className}>
      {events.map((event, idx) => (
        <EventCard
          key={`${event.speaker}-${idx}`}
          event={event}
          variant={variant}
          badge={badge}
        />
      ))}
    </div>
  );
}
