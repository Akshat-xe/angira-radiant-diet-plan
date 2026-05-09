import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import bgHero from "@/assets/bg-hero.jpg";
import { DAYS, T, type Lang } from "@/lib/diet-data";
import { DayCard } from "@/components/DayCard";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Angira Diet Routine — Daily Plan" },
      {
        name: "description",
        content:
          "A premium 7-day diet routine dashboard with timing-based meals, auto-detecting today's plan.",
      },
    ],
  }),
});

function useNow() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

function Index() {
  const now = useNow();
  const [lang, setLang] = useState<Lang>("en");
  // JS getDay: 0=Sun..6=Sat. Our DAYS array is Mon..Sun (index 0..6)
  const todayIndex = useMemo(() => (now.getDay() + 6) % 7, [now]);
  const [openIndex, setOpenIndex] = useState<number>(todayIndex);

  useEffect(() => {
    setOpenIndex(todayIndex);
  }, [todayIndex]);

  const locale = lang === "en" ? "en-US" : "hi-IN";
  const dateStr = now.toLocaleDateString(locale, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const timeStr = now.toLocaleTimeString(locale, {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgHero})` }}
      />
      <div
        className="fixed inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.98 0.02 25 / 0.55) 0%, oklch(0.95 0.03 20 / 0.75) 50%, oklch(0.92 0.05 18 / 0.85) 100%)",
        }}
      />
      {/* Floating orbs */}
      <motion.div
        className="fixed -z-10 top-[-100px] right-[-80px] w-[320px] h-[320px] rounded-full blur-3xl opacity-50 animate-float"
        style={{ background: "radial-gradient(circle, oklch(0.85 0.13 20 / 0.6), transparent 70%)" }}
      />
      <motion.div
        className="fixed -z-10 bottom-[-120px] left-[-80px] w-[360px] h-[360px] rounded-full blur-3xl opacity-40 animate-float"
        style={{
          background: "radial-gradient(circle, oklch(0.82 0.13 70 / 0.5), transparent 70%)",
          animationDelay: "2s",
        }}
      />

      <main className="mx-auto w-full max-w-2xl px-4 pt-6 pb-16 sm:pt-10">
        {/* Hero header */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-[2rem] p-6 sm:p-8 relative overflow-hidden"
        >
          <div
            className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-2xl opacity-60"
            style={{ background: "var(--gradient-gold)" }}
          />
          <div className="relative">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-mocha/80 font-semibold">
                  {lang === "en" ? "Wellness Dashboard" : "वेलनेस डैशबोर्ड"}
                </div>
                <h1 className="font-display text-3xl sm:text-4xl font-bold mt-2 leading-tight">
                  <span className="text-gradient-gold">{T.title[lang]}</span>
                </h1>
              </div>
              <button
                onClick={() => setLang(lang === "en" ? "hi" : "en")}
                className="shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold glass active:scale-95 transition-transform"
                aria-label="Toggle language"
              >
                <Languages className="w-3.5 h-3.5" />
                {lang === "en" ? "हिं" : "EN"}
              </button>
            </div>

            <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-md">
              {T.subtitle[lang]}
            </p>

            <motion.div
              key={lang + dateStr}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-5 flex items-end justify-between gap-4 flex-wrap"
            >
              <div>
                <div className="text-xs text-muted-foreground">{dateStr}</div>
                <div className="font-display text-3xl sm:text-4xl font-semibold mt-1 tabular-nums">
                  {timeStr}
                </div>
              </div>
              <div
                className="px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider text-white"
                style={{ background: "var(--gradient-gold)" }}
              >
                {T.tapToView[lang]}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Section title */}
        <div className="mt-8 mb-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rose/40 to-transparent" />
          <h2 className="font-display text-sm uppercase tracking-[0.25em] text-mocha font-semibold">
            {T.weekPlan[lang]}
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rose/40 to-transparent" />
        </div>

        {/* Day cards */}
        <div className="space-y-4">
          {DAYS.map((d, i) => (
            <DayCard
              key={d.dayEn}
              dayEn={d.dayEn}
              dayHi={d.dayHi}
              dayNumber={i + 1}
              meals={d.meals}
              isToday={i === todayIndex}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              lang={lang}
            />
          ))}
        </div>

        <div className="mt-10 text-center text-xs text-mocha/70 tracking-wide">
          {T.footer[lang]}
        </div>
      </main>
    </div>
  );
}
