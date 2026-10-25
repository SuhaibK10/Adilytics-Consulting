"use client";

import { useEffect, useState, type FormEvent } from "react";
import { CALL_TOPICS } from "@/lib/content";
import { BOOKING, BRAND, CONTACT, emailLink } from "@/lib/site";
import { LogoMark } from "@/components/Logo";
import { Calendar, Check, ChevronLeft, ChevronRight, Clock, Video } from "@/components/Icons";

const FIELD =
  "mt-1.5 w-full rounded-xl border border-line bg-paper px-3.5 py-2.5 text-[0.95rem] text-ink placeholder:text-ink-mute focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15";

const DAY_MS = 86_400_000;
const IST_OFFSET_MS = 330 * 60_000;
const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAYS_LABEL = BOOKING.days.map((d) => `${WEEKDAYS[d]}s`).join(" & ");

// Days are UTC-midnight timestamps holding IST dates, so getUTC* reads IST values without time zone maths.
const startOfDay = (t: number) => t - (t % DAY_MS);
const minutesOf = (time: string) => {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
};

function formatTime(time: string) {
  const [h, m] = time.split(":").map(Number);
  return `${h % 12 || 12}:${String(m).padStart(2, "0")} ${h < 12 ? "AM" : "PM"}`;
}

function formatDay(day: number, short = false) {
  const d = new Date(day);
  const name = WEEKDAYS[d.getUTCDay()];
  const month = MONTHS[d.getUTCMonth()];
  return short ? `${name.slice(0, 3)} ${d.getUTCDate()} ${month.slice(0, 3)}` : `${name}, ${d.getUTCDate()} ${month}`;
}

function slotsFor(day: number, now: number) {
  const today = startOfDay(now);
  if (!BOOKING.days.includes(new Date(day).getUTCDay())) return [];
  if (day < today || day > today + BOOKING.weeksAhead * 7 * DAY_MS) return [];
  const earliest = now + BOOKING.minNoticeHours * 3_600_000;
  return BOOKING.times.filter((t) => day + minutesOf(t) * 60_000 >= earliest);
}

function firstBookable(now: number) {
  const today = startOfDay(now);
  for (let d = today; d <= today + BOOKING.weeksAhead * 7 * DAY_MS; d += DAY_MS) {
    if (slotsFor(d, now).length) return d;
  }
  return null;
}

function monthStart(t: number, shift = 0) {
  const d = new Date(t);
  return Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + shift, 1);
}

// Monday-first grid, so the weekend columns sit together on the right
function monthCells(month: number) {
  const lead = (new Date(month).getUTCDay() + 6) % 7;
  const count = new Date(monthStart(month, 1) - DAY_MS).getUTCDate();
  return [...Array<null>(lead).fill(null), ...Array.from({ length: count }, (_, i) => month + i * DAY_MS)];
}

type Step = "pick" | "details" | "sent";

// No backend: the chosen slot goes to the team as a pre-written email, and they confirm with a meeting invite.
export function BookingCalendar({ topic = CALL_TOPICS[0] }: { topic?: string }) {
  // IST wall-clock time, set after mount so the prerendered page never shows the build date's slots
  const [now, setNow] = useState<number | null>(null);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState<number | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [step, setStep] = useState<Step>("pick");
  const [request, setRequest] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const t = Date.now() + IST_OFFSET_MS;
    const first = firstBookable(t);
    setNow(t);
    setDay(first);
    setMonth(monthStart(first ?? t));
  }, []);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (day === null || !time) return;
    const f = new FormData(e.currentTarget);
    const line = (label: string, key: string) => (f.get(key) ? `${label}: ${f.get(key)}` : null);
    const body = [
      `Hi ${BRAND.name} team,`,
      "",
      `I'd like to book a ${BOOKING.minutes}-minute call.`,
      "",
      `Slot: ${formatDay(day)} ${new Date(day).getUTCFullYear()}, ${formatTime(time)} IST`,
      line("Name", "name"),
      line("Company", "company"),
      line("Email", "email"),
      line("Phone", "phone"),
      line("Topic", "topic"),
      f.get("notes") ? `\n${f.get("notes")}` : null,
    ]
      .filter((l) => l !== null)
      .join("\n");
    setRequest(body);
    setCopied(false);
    window.location.href = emailLink(`Call request: ${formatDay(day, true)}, ${formatTime(time)} IST (${f.get("company")})`, body);
    setStep("sent");
  }

  function startOver() {
    setTime(null);
    setStep("pick");
  }

  const today = now === null ? 0 : startOfDay(now);
  const canPrev = month > monthStart(today);
  const canNext = monthStart(month, 1) <= today + BOOKING.weeksAhead * 7 * DAY_MS;
  const panel = "border-t border-line p-6 sm:p-8 lg:border-l lg:border-t-0";

  return (
    <div className="grid overflow-hidden rounded-[2rem] border border-line bg-white/60 text-left shadow-[0_30px_80px_-50px_rgb(0_0_0/0.35)] lg:grid-cols-[17rem_1fr_13rem]">
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <LogoMark className="size-12" />
          <div>
            <p className="font-medium tracking-tight">{BRAND.name}</p>
            <p className="text-sm text-ink-mute">Sales & distribution partners</p>
          </div>
        </div>
        <p className="mt-6 text-2xl font-medium tracking-[-0.02em]">Intro call</p>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
          Walk us through your brand, channels and targets. You leave with a clear view of what to fix first.
        </p>
        <ul className="mt-6 space-y-2.5 text-sm text-ink-soft">
          <li className="flex items-center gap-2.5">
            <Clock className="size-4 text-accent" /> {BOOKING.minutes} minutes
          </li>
          <li className="flex items-center gap-2.5">
            <Video className="size-4 text-accent" /> Google Meet or phone
          </li>
          <li className="flex items-center gap-2.5">
            <Calendar className="size-4 text-accent" /> {DAYS_LABEL}, IST
          </li>
        </ul>
        {step !== "pick" && day !== null && time && (
          <div className="mt-6 rounded-2xl border border-accent/25 bg-accent-soft p-4">
            <p className="eyebrow">Your slot</p>
            <p className="mt-1.5 font-medium tracking-tight">{formatDay(day)}</p>
            <p className="text-sm text-ink-soft">
              {formatTime(time)} IST · {BOOKING.minutes} min
            </p>
            {step === "details" && (
              <button type="button" onClick={startOver} className="mt-2 text-sm text-accent-strong underline-offset-4 hover:underline">
                Change time
              </button>
            )}
          </div>
        )}
      </div>

      {now === null ? (
        <div className={`${panel} grid min-h-[22rem] place-items-center text-sm text-ink-mute lg:col-span-2`}>Loading available slots…</div>
      ) : step === "pick" ? (
        <>
          <div className={panel}>
            <div className="flex items-center justify-between">
              <p className="font-medium tracking-tight">
                {MONTHS[new Date(month).getUTCMonth()]} {new Date(month).getUTCFullYear()}
              </p>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => setMonth(monthStart(month, -1))}
                  disabled={!canPrev}
                  aria-label="Previous month"
                  className="grid size-9 place-items-center rounded-full text-ink-soft hover:bg-paper-2 disabled:pointer-events-none disabled:opacity-30"
                >
                  <ChevronLeft className="size-4.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setMonth(monthStart(month, 1))}
                  disabled={!canNext}
                  aria-label="Next month"
                  className="grid size-9 place-items-center rounded-full text-ink-soft hover:bg-paper-2 disabled:pointer-events-none disabled:opacity-30"
                >
                  <ChevronRight className="size-4.5" />
                </button>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-7 gap-1 text-center">
              {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((w, i) => (
                <span
                  key={w}
                  className={`pb-2 font-mono text-[0.6875rem] uppercase tracking-[0.1em] ${BOOKING.days.includes((i + 1) % 7) ? "text-accent-strong" : "text-ink-mute"}`}
                >
                  {w}
                </span>
              ))}
              {monthCells(month).map((d, i) => {
                if (d === null) return <span key={`lead-${i}`} />;
                const open = slotsFor(d, now).length > 0;
                const selected = d === day;
                return (
                  <button
                    key={d}
                    type="button"
                    disabled={!open}
                    onClick={() => setDay(d)}
                    aria-pressed={selected}
                    aria-label={`${formatDay(d)}${open ? "" : ", unavailable"}`}
                    className={`relative mx-auto grid aspect-square w-full max-w-11 place-items-center rounded-full text-sm transition-colors ${
                      selected
                        ? "bg-accent font-medium text-white"
                        : open
                          ? "bg-accent-soft font-medium text-accent-strong hover:bg-accent-tint"
                          : "text-ink-mute/45"
                    }`}
                  >
                    {new Date(d).getUTCDate()}
                    {d === today && <span className="absolute bottom-1 size-1 rounded-full bg-current" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div className={panel}>
            {day !== null ? (
              <>
                <p className="font-medium tracking-tight">{formatDay(day)}</p>
                <p className="mt-0.5 text-sm text-ink-mute">Times in IST</p>
                <ul className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-1">
                  {slotsFor(day, now).map((t) => (
                    <li key={t}>
                      <button
                        type="button"
                        onClick={() => {
                          setTime(t);
                          setStep("details");
                        }}
                        className="w-full rounded-xl border border-accent/30 px-3 py-2.5 text-sm font-medium text-accent-strong transition-colors hover:border-accent hover:bg-accent hover:text-white"
                      >
                        {formatTime(t)}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="text-sm text-ink-mute">No open slots in the next {BOOKING.weeksAhead} weeks.</p>
            )}
          </div>
        </>
      ) : step === "details" ? (
        <form onSubmit={submit} className={`${panel} grid content-start gap-4 sm:grid-cols-2 lg:col-span-2`}>
          <p className="text-xl font-medium tracking-[-0.02em] sm:col-span-2">Your details</p>
          <label className="text-sm text-ink-soft">
            Your name
            <input name="name" required autoComplete="name" className={FIELD} />
          </label>
          <label className="text-sm text-ink-soft">
            Brand or company
            <input name="company" required autoComplete="organization" className={FIELD} />
          </label>
          <label className="text-sm text-ink-soft">
            Email
            <input name="email" type="email" required autoComplete="email" className={FIELD} />
          </label>
          <label className="text-sm text-ink-soft">
            Phone <span className="text-ink-mute">(optional)</span>
            <input name="phone" type="tel" autoComplete="tel" className={FIELD} />
          </label>
          <label className="text-sm text-ink-soft sm:col-span-2">
            What should we talk about?
            <select name="topic" className={FIELD} defaultValue={topic}>
              {CALL_TOPICS.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
          <label className="text-sm text-ink-soft sm:col-span-2">
            Anything to share first? <span className="text-ink-mute">(optional)</span>
            <textarea name="notes" rows={3} placeholder="e.g. We sell online and want to enter general trade in 3 cities" className={FIELD} />
          </label>
          <div className="flex flex-col items-start gap-3 pt-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-ink-mute">Opens your email app with the request written. The {BRAND.name} team confirms with a meeting invite.</p>
            <button
              type="submit"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
            >
              Request this slot
            </button>
          </div>
        </form>
      ) : (
        <div className={`${panel} flex flex-col items-start justify-center lg:col-span-2`}>
          <span className="grid size-11 place-items-center rounded-full bg-accent text-white">
            <Check className="size-5" />
          </span>
          <p className="mt-5 text-2xl font-medium tracking-[-0.02em]">One step left: send the email.</p>
          <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-ink-soft">
            Your email app should have opened with the request written out{CONTACT.email ? ` to ${CONTACT.email}` : ""}. Send it and the {BRAND.name}{" "}
            team will confirm the slot with a meeting invite.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => navigator.clipboard?.writeText(request).then(() => setCopied(true))}
              className="rounded-full border border-line bg-white/60 px-4 py-2 text-sm text-ink transition-colors hover:border-accent/40"
            >
              {copied ? "Copied" : "Email didn't open? Copy the request"}
            </button>
            <button type="button" onClick={startOver} className="rounded-full px-4 py-2 text-sm text-accent-strong transition-colors hover:bg-accent-soft">
              Pick another time
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
