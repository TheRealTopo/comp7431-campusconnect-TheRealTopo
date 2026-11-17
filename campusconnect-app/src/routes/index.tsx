import { createFileRoute } from "@tanstack/react-router";
import { Info } from "lucide-react";

import { OrientationVideoCard } from "@/components/campus/OrientationVideoCard";
import { TextHelpPanel } from "@/components/campus/TextHelpPanel";
import { VoiceAgentCard } from "@/components/campus/VoiceAgentCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CampusConnect Multimodal Help" },
      {
        name: "description",
        content:
          "Get approved campus IT help by text, voice, or a short orientation video. Unsupported questions go to a human.",
      },
      { property: "og:title", content: "CampusConnect Multimodal Help" },
      {
        property: "og:description",
        content: "Approved campus IT help by text, voice, or video, with a safe human handoff.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#ask-text" className="skip-link">
        Skip to text question
      </a>
      <main className="mx-auto flex max-w-3xl flex-col gap-8 px-4 pb-40 pt-12 sm:pt-16">
        <header>
          <p className="text-sm font-bold uppercase tracking-widest text-primary">CampusConnect</p>
          <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">CampusConnect Multimodal Help</h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Approved help for password resets, secure campus Wi-Fi, and the IT Service Desk.
          </p>
        </header>

        <TextHelpPanel />
        <VoiceAgentCard />
        <OrientationVideoCard />

        <aside
          aria-label="Fallback"
          className="flex gap-3 rounded-2xl border-2 border-notice-border bg-notice p-5 text-notice-foreground"
        >
          <Info aria-hidden className="mt-0.5 size-5 shrink-0" />
          <p className="font-bold">
            If voice or video is unavailable, type your question. Unsupported questions are referred
            to a human.
          </p>
        </aside>

        <footer className="text-sm text-muted-foreground">
          Guides shown here are synthetic classroom examples, not real university policy.
        </footer>
      </main>
    </>
  );
}
