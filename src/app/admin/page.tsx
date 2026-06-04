"use client";

import { FormEvent, useMemo, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LayoutContainer from "@/components/layout-container";

const ADMIN_ACCESS_KEY = "ep0ie72jzoopthlof";
const SESSIONS_API_URL = "https://api.thehackbio.com/api/journal-club/sessions/";

type SubmitState = {
  type: "idle" | "success" | "error";
  message: string;
};

export default function AdminPage() {
  const [accessKey, setAccessKey] = useState("");
  const [speakerName, setSpeakerName] = useState("");
  const [paperName, setPaperName] = useState("");
  const [abstract, setAbstract] = useState("");
  const [recordingLink, setRecordingLink] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>({
    type: "idle",
    message: "",
  });

  const accessGranted = useMemo(
    () => accessKey.trim() === ADMIN_ACCESS_KEY,
    [accessKey],
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState({ type: "idle", message: "" });

    if (!accessGranted) {
      setSubmitState({
        type: "error",
        message: "The admin key is incorrect.",
      });
      return;
    }

    if (!imageFile) {
      setSubmitState({
        type: "error",
        message: "Please upload a speaker or session image.",
      });
      return;
    }

    const formData = new FormData();
    formData.append("speaker_name", speakerName);
    formData.append("paper_name", paperName);
    formData.append("abstract", abstract);
    formData.append("recording_link", recordingLink);
    formData.append("image", imageFile);

    setSubmitting(true);

    try {
      const response = await fetch(SESSIONS_API_URL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      setSpeakerName("");
      setPaperName("");
      setAbstract("");
      setRecordingLink("");
      setImageFile(null);
      event.currentTarget.reset();

      setSubmitState({
        type: "success",
        message: "Journal club session created successfully.",
      });
    } catch {
      setSubmitState({
        type: "error",
        message: "The session could not be created. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="w-full">
      <Header />
      <LayoutContainer className="py-10">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
          <div className="flex min-h-40 flex-col items-center justify-center gap-3 bg-sky-100 px-5 text-center">
            <p className="text-3xl font-bold">Admin</p>
            <p className="max-w-2xl text-base">
              Create a new journal club session for the Past Events page.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-md border border-sky-200 bg-white p-5 shadow-sm"
          >
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
              Admin API Key
              <input
                type="password"
                value={accessKey}
                onChange={(event) => setAccessKey(event.target.value)}
                className="rounded-md border border-slate-200 px-3 py-2 font-normal outline-none focus:border-sky-500"
                placeholder="Enter frontend admin key"
                required
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
              Speaker Name
              <input
                type="text"
                value={speakerName}
                onChange={(event) => setSpeakerName(event.target.value)}
                className="rounded-md border border-slate-200 px-3 py-2 font-normal outline-none focus:border-sky-500"
                placeholder="Dr. Ada Lovelace"
                required
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
              Paper Name
              <input
                type="text"
                value={paperName}
                onChange={(event) => setPaperName(event.target.value)}
                className="rounded-md border border-slate-200 px-3 py-2 font-normal outline-none focus:border-sky-500"
                placeholder="A New View of Cell Signaling"
                required
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
              Abstract
              <textarea
                value={abstract}
                onChange={(event) => setAbstract(event.target.value)}
                className="min-h-40 rounded-md border border-slate-200 px-3 py-2 font-normal outline-none focus:border-sky-500"
                placeholder="Add the session abstract here..."
                required
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
              Session Image
              <input
                type="file"
                accept="image/*"
                onChange={(event) =>
                  setImageFile(event.target.files?.[0] ?? null)
                }
                className="rounded-md border border-slate-200 px-3 py-2 font-normal"
                required
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
              Recording Link
              <input
                type="url"
                value={recordingLink}
                onChange={(event) => setRecordingLink(event.target.value)}
                className="rounded-md border border-slate-200 px-3 py-2 font-normal outline-none focus:border-sky-500"
                placeholder="https://youtube.com/watch?v=..."
              />
            </label>

            {submitState.message ? (
              <p
                className={`rounded-md px-3 py-2 text-sm font-medium ${
                  submitState.type === "success"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {submitState.message}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-fit items-center justify-center rounded-md border-2 border-[#185CFF] bg-[#185CFF] px-6 py-2 text-base font-bold text-white transition-colors hover:bg-[#154ED6] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Creating..." : "Create Session"}
            </button>
          </form>
        </div>
      </LayoutContainer>
      <Footer />
    </main>
  );
}
