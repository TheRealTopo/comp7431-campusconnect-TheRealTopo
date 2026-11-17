import { useState, type FormEvent } from "react";
import { FileText, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import { answerCampusQuestion, type CampusAnswer } from "@/lib/campus-answer";

export const QUESTION_INPUT_ID = "question-input";

const EXAMPLES = [
  "How do I reset my password?",
  "How do I connect to secure campus Wi-Fi?",
  "How do I contact the IT Service Desk?",
];

export function TextHelpPanel() {
  const [question, setQuestion] = useState("");
  const [asked, setAsked] = useState("");
  const [result, setResult] = useState<CampusAnswer | null>(null);

  function ask(text: string) {
    setAsked(text.trim());
    setResult(answerCampusQuestion(text));
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!question.trim()) return;
    ask(question);
    setQuestion("");
  }

  return (
    <section
      id="ask-text"
      aria-labelledby="ask-text-heading"
      className="rounded-2xl border-2 border-primary bg-card p-6 shadow-card sm:p-8"
    >
      <h2 id="ask-text-heading" className="text-2xl font-bold">
        Ask by text
      </h2>
      <p className="mt-1 text-muted-foreground">
        Answers come only from approved CampusConnect IT guides, with the source shown.
      </p>

      <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-3">
        <label htmlFor={QUESTION_INPUT_ID} className="font-bold">
          Your question
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id={QUESTION_INPUT_ID}
            type="text"
            autoComplete="off"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="e.g. How do I reset my password?"
            className="h-12 flex-1 rounded-md border-2 border-input bg-card px-4 text-base text-foreground placeholder:text-muted-foreground"
          />
          <Button type="submit" size="lg" className="h-12 text-base">
            Ask
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Do not include passwords, recovery codes, or student records.
        </p>
      </form>

      <div className="mt-4 flex flex-wrap gap-2" aria-label="Example questions">
        {EXAMPLES.map((example) => (
          <Button
            key={example}
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => ask(example)}
          >
            {example}
          </Button>
        ))}
      </div>

      <div aria-live="polite" className="mt-6">
        {result && (
          <div
            className={
              result.kind === "answer"
                ? "rounded-xl bg-success p-5 text-success-foreground"
                : "rounded-xl border-2 border-notice-border bg-notice p-5 text-notice-foreground"
            }
          >
            <p className="text-sm font-bold">You asked: {asked}</p>
            <p className="mt-2 text-lg">{result.answer}</p>
            <dl className="mt-4 grid gap-1 text-sm sm:grid-cols-[auto_1fr] sm:gap-x-4">
              {result.kind === "answer" ? (
                <>
                  <dt className="flex items-center gap-1 font-bold">
                    <FileText aria-hidden className="size-4" /> Source
                  </dt>
                  <dd>
                    {result.guide.source} — {result.guide.owner}, reviewed {result.guide.reviewed}
                  </dd>
                </>
              ) : (
                <>
                  <dt className="flex items-center gap-1 font-bold">
                    <UserRound aria-hidden className="size-4" /> Human help
                  </dt>
                  <dd>{result.contact}</dd>
                </>
              )}
              <dt className="font-bold">Confidence</dt>
              <dd>{result.confidence}</dd>
            </dl>
          </div>
        )}
      </div>
    </section>
  );
}
