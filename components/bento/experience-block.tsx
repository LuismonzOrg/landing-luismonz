"use client"

import { useI18n } from "@/lib/i18n/context"

export function ExperienceBlock() {
  const { t } = useI18n()

  return (
    <div className="col-span-full border border-border p-6 md:p-8 lg:col-span-2">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-serif text-lg tracking-tight text-foreground">
          {t.experience.title}
        </h2>
        <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
          {t.experience.label}
        </span>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[3px] top-2 bottom-2 w-px bg-border" />

        <div className="space-y-6">
          {t.experience.items.map((exp, i) => (
            <div key={i} className="relative pl-8">
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 h-[7px] w-[7px] rounded-full border border-foreground bg-background" />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-sm font-medium text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-xs text-muted-foreground">{exp.org}</p>
                </div>
                <span className="shrink-0 font-mono text-[10px] tracking-wider text-muted-foreground">
                  {exp.year}
                </span>
              </div>

              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
