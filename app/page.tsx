"use client"

import { HeroBlock } from "@/components/bento/hero-block"
import { ThemeToggle } from "@/components/theme-toggle"
import { LocaleToggle } from "@/components/locale-toggle"
import { useI18n } from "@/lib/i18n/context"
import { ThinkingAboutSection } from "@/components/sections/thinking-about-section"
import { ExperienceSection } from "@/components/sections/experience-section"

export default function Home() {
  const { t } = useI18n()

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-12 md:px-6 md:py-20">
      {/* Top bar */}
      <header className="mb-6 flex items-center justify-between">
        <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          {t.header.portfolio}
        </span>
        <div className="flex items-center gap-3">
          <span className="hidden font-mono text-xs tracking-widest text-muted-foreground sm:inline">
            14.6349 N, 90.5069 W
          </span>
          <LocaleToggle />
          <ThemeToggle />
        </div>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Row 1: Hero — full width */}
        <HeroBlock />
      </div>

      <br />

      {/* Experience Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ExperienceSection />
      </div>

      <br />

      {/* Thinking About Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ThinkingAboutSection />
      </div>

      <br />

    </main>
  )
}
