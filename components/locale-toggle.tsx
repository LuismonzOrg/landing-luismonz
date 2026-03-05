"use client"

import { useI18n } from "@/lib/i18n/context"

export function LocaleToggle() {
  const { locale, toggleLocale } = useI18n()

  return (
    <button
      onClick={toggleLocale}
      className="flex h-8 items-center gap-px border border-border text-foreground transition-colors hover:bg-secondary/50"
      aria-label={`Switch language to ${locale === "en" ? "Spanish" : "English"}`}
    >
      <span
        className={`flex h-full items-center px-2 font-mono text-[10px] tracking-widest uppercase transition-colors ${
          locale === "en"
            ? "bg-foreground text-background"
            : "text-muted-foreground"
        }`}
      >
        EN
      </span>
      <span
        className={`flex h-full items-center px-2 font-mono text-[10px] tracking-widest uppercase transition-colors ${
          locale === "es"
            ? "bg-foreground text-background"
            : "text-muted-foreground"
        }`}
      >
        ES
      </span>
    </button>
  )
}
