"use client"

import { useI18n } from "@/lib/i18n/context"

export function HeroBlock() {
  const { t } = useI18n()

  return (
    <div className="col-span-full flex flex-col justify-between border border-border p-8 md:p-10">
      <div className="mb-12">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          {t.hero.label}
        </p>
      </div>

      <div className="space-y-4">
        <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
          {t.hero.title1}
          <br />
          <span className="text-muted-foreground">{t.hero.title2}</span>
        </h1>

        <div className="flex items-center gap-3 pt-2">
          <div className="h-px w-12 bg-foreground" />
          <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-md">
            {t.hero.subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}
