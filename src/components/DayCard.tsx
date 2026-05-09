import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, Utensils } from "lucide-react";
import { TIMINGS, WAKE_UP, T, type Lang } from "@/lib/diet-data";

interface Props {
  dayEn: string;
  dayHi: string;
  dayNumber: number;
  meals: { en: string; hi: string }[];
  isToday: boolean;
  isOpen: boolean;
  onToggle: () => void;
  lang: Lang;
}

export function DayCard({ dayEn, dayHi, dayNumber, meals, isToday, isOpen, onToggle, lang }: Props) {
  const dayName = lang === "en" ? dayEn : dayHi;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`glass rounded-3xl overflow-hidden ${
        isToday ? "ring-gold" : ""
      }`}
      style={isToday ? { boxShadow: "var(--shadow-glow), var(--shadow-glass)" } : undefined}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 p-5 text-left active:scale-[0.99] transition-transform"
      >
        <div className="flex items-center gap-4 min-w-0">
          <div
            className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-display text-lg font-semibold ${
              isToday ? "text-gradient-gold" : "text-mocha"
            }`}
            style={{
              background: isToday
                ? "linear-gradient(145deg, oklch(1 0 0 / 0.9), oklch(0.95 0.04 20 / 0.6))"
                : "linear-gradient(145deg, oklch(1 0 0 / 0.6), oklch(0.95 0.02 30 / 0.4))",
              boxShadow: "inset 2px 2px 6px oklch(1 0 0 / 0.7), inset -2px -2px 6px oklch(0.7 0.04 20 / 0.15)",
            }}
          >
            {dayNumber}
          </div>
          <div className="min-w-0">
            <div className="font-display text-lg sm:text-xl font-semibold text-foreground truncate">
              {dayName}
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">
              {T.day[lang]} {dayNumber}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {isToday && (
            <span
              className="hidden xs:inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider text-white animate-glow"
              style={{ background: "var(--gradient-gold)" }}
            >
              <Sparkles className="w-3 h-3" /> {T.today[lang]}
            </span>
          )}
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown className="w-5 h-5 text-mocha" />
          </motion.div>
        </div>
      </button>

      {isToday && (
        <div className="px-5 -mt-2 pb-1 sm:hidden">
          <span
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider text-white animate-glow"
            style={{ background: "var(--gradient-gold)" }}
          >
            <Sparkles className="w-3 h-3" /> {T.today[lang]}
          </span>
        </div>
      )}

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6 pt-2 space-y-3">
              {/* Wake-up entry */}
              <TimelineRow
                time={TIMINGS[0][lang]}
                text={WAKE_UP[lang]}
                accent
              />
              {meals.map((meal, i) => (
                <TimelineRow
                  key={i}
                  time={TIMINGS[i + 1][lang]}
                  text={meal[lang]}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function TimelineRow({ time, text, accent = false }: { time: string; text: string; accent?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35 }}
      className="relative pl-10"
    >
      <div
        className="absolute left-0 top-1.5 w-7 h-7 rounded-full flex items-center justify-center"
        style={{
          background: accent
            ? "var(--gradient-gold)"
            : "linear-gradient(145deg, oklch(0.95 0.04 20), oklch(0.85 0.06 18))",
          boxShadow: "0 4px 12px oklch(0.7 0.1 20 / 0.25)",
        }}
      >
        <Utensils className="w-3.5 h-3.5 text-white" />
      </div>
      <div className="absolute left-[13px] top-9 bottom-[-12px] w-px bg-gradient-to-b from-rose/30 to-transparent last:hidden" />
      <div
        className="rounded-2xl p-3.5"
        style={{
          background: "linear-gradient(135deg, oklch(1 0 0 / 0.6), oklch(0.97 0.02 25 / 0.35))",
          border: "1px solid oklch(1 0 0 / 0.55)",
        }}
      >
        <div className="text-[11px] font-semibold tracking-wider uppercase text-rose mb-1">{time}</div>
        <div className="text-sm sm:text-base text-foreground leading-relaxed">{text}</div>
      </div>
    </motion.div>
  );
}
