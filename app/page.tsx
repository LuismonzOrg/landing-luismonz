"use client"

import { HeroBlock } from "@/components/bento/hero-block"
import { StudyBlock } from "@/components/bento/study-block"
import { ExperienceBlock } from "@/components/bento/experience-block"
import { ContactBlock } from "@/components/bento/contact-block"
import { FocusBlock } from "@/components/bento/focus-block"
import { ThemeToggle } from "@/components/theme-toggle"
import { LocaleToggle } from "@/components/locale-toggle"
import { useI18n } from "@/lib/i18n/context"

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

        {/* Row 2: Four study blocks */}
        <StudyBlock
          icon="cs"
          title={t.studies.cs.title}
          description={t.studies.cs.description}
          topics={[...t.studies.cs.topics]}
        />
        <StudyBlock
          icon="physics"
          title={t.studies.physics.title}
          description={t.studies.physics.description}
          topics={[...t.studies.physics.topics]}
          serif
        />
        <StudyBlock
          icon="math"
          title={t.studies.math.title}
          description={t.studies.math.description}
          topics={[...t.studies.math.topics]}
          serif
        />

        {/* Row 3: Theology + Current Focus + Contact */}
        <StudyBlock
          icon="theology"
          title={t.studies.theology.title}
          description={t.studies.theology.description}
          topics={[...t.studies.theology.topics]}
          serif
        />
        <FocusBlock />
        <ContactBlock />

        {/* Row 4: Experience — wide block */}
        <ExperienceBlock />

        {/* Footer cell */}
        <div className="flex items-center justify-between border border-border p-6 md:p-8 lg:col-span-1">
          <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            {t.footer.left}
          </p>
          <p className="font-mono text-[10px] tracking-wider text-muted-foreground">
            {t.footer.right}
          </p>
        </div>
      </div>
    </main>
  )
}
