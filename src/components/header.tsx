"use client";

import { useState } from "react";
import logo from "./../../public/sjc_logo-removebg-preview.png"
import Image from "next/image";
import Link from "next/link";
import LayoutContainer from "@/components/layout-container";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <div className="hidden w-full bg-sky-200 md:flex">
        <LayoutContainer className="py-5">
          {/*desktop*/}
          <div className="flex flex-col gap-5 items-start justify-start">
            <div className="flex flex-row justify-between w-full items-center">
              <Link href={'/'}><div className="flex flex-row gap-5 items-center">
                  <Image src={logo.src} height={50} width={50} alt="Science Journal Club logo" />
                  <p className="text-base font-black">Science Journal Club</p>
              </div></Link>

              <div className="flex flex-row gap-5 justify-between items-center">
                <Link href={`/#upcoming-events`}>Upcoming Meeting</Link>
                <Link href={`/past-events`}>Past Meetings</Link>
                <Link href={`/scholarships`}>Scholarships</Link>
                <Link href={`/contact`}>Contact Us</Link>
                 
              </div>
            </div>
          </div>
        </LayoutContainer>
      </div>

      <div className="flex w-full md:hidden bg-sky-200">
        <LayoutContainer className="py-5">
          <div className="flex items-center justify-between">
            <Link href={'/'}><div className="flex flex-row gap-3 items-center">
              <Image src={logo.src} height={32} width={32} alt="Science Journal Club logo" />
              <p className="text-base font-black">Science Journal Club</p>
            </div></Link>

            <button
              type="button"
              aria-label="Open menu"
              className="flex h-10 w-10 flex-col items-center justify-center rounded-full border border-sky-300 bg-white text-sky-700"
              onClick={() => setMenuOpen(true)}
            >
              <span className="block h-0.5 w-5 bg-sky-700"></span>
              <span className="mt-1.5 block h-0.5 w-5 bg-sky-700"></span>
              <span className="mt-1.5 block h-0.5 w-5 bg-sky-700"></span>
            </button>
          </div>
        </LayoutContainer>

        {menuOpen && (
          <button
            type="button"
            aria-label="Close menu overlay"
            className="fixed inset-0 z-40 bg-slate-900/40"
            onClick={() => setMenuOpen(false)}
          />
        )}

        <div
          className={`fixed right-0 top-0 z-50 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <p className="text-sm font-bold text-slate-700">Menu</p>
            <button
              type="button"
              aria-label="Close menu"
              className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600"
              onClick={() => setMenuOpen(false)}
            >
              Close
            </button>
          </div>

          <nav className="flex flex-col gap-4 px-5 py-6 text-base font-medium text-slate-700">
            <Link href={`/#upcoming-events`} onClick={() => setMenuOpen(false)}>
              Upcoming Meeting
            </Link>
            <Link href={`/past-events`} onClick={() => setMenuOpen(false)}>
              Past Meetings
            </Link>
            <Link href={`/scholarships`} onClick={() => setMenuOpen(false)}>
              Scholarships
            </Link>
            <Link href={`/contact`} onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </main>
    
  );
}
