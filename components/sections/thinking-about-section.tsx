"use client"

import { StudyBlock } from "@/components/bento/study-block"
import { useI18n } from "@/lib/i18n/context"

export function ThinkingAboutSection() {
  const { t } = useI18n()

  return (
    <>
      <div className="md:col-span-2 lg:col-span-3 mt-4 mb-0 flex items-end">
        <h2 className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
          Thinking about...
        </h2>
      </div>

      {/* Row 2: Four study blocks */}
      <StudyBlock
        icon="cs"
        title={t.studies.cs.title}
        description={t.studies.cs.description}
        topics={[...t.studies.cs.topics]}
        href="https://cs.luismonz.com"
      />
      <StudyBlock
        icon="physics"
        title={t.studies.physics.title}
        description={t.studies.physics.description}
        topics={[...t.studies.physics.topics]}
        serif
        href="https://physics.luismonz.com"
      />
      <StudyBlock
        icon="math"
        title={t.studies.math.title}
        description={t.studies.math.description}
        topics={[...t.studies.math.topics]}
        serif
        href="https://math.luismonz.com"
      />

      {/* Row 3: Theology + Current Focus + Contact */}
      <StudyBlock
        icon="theology"
        title={t.studies.theology.title}
        description={t.studies.theology.description}
        topics={[...t.studies.theology.topics]}
        serif
        href="https://theology.luismonz.com"
      />
    </>
  )
}
