"use client"

import { Circle } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

export function FocusBlock() {
  const { t } = useI18n()

  return (
    <div className="flex flex-col justify-between border border-border p-6 md:p-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-serif text-lg tracking-tight text-foreground">
          {t.focus.title}
        </h2>
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-40" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
        </span>
      </div>

      <div className="space-y-3">
        {t.focus.items.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <Circle
              size={6}
              strokeWidth={1.5}
              className="mt-1.5 shrink-0 text-muted-foreground"
            />
            <div>
              <p className="text-sm text-foreground leading-relaxed">
                {item.label}
              </p>
              <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                {item.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
