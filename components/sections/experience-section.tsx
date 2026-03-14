"use client"

import { ExperienceBlock } from "@/components/bento/experience-block"
import { ContactBlock } from "@/components/bento/contact-block"
import { FocusBlock } from "@/components/bento/focus-block"
import { useI18n } from "@/lib/i18n/context"

export function ExperienceSection() {
  const { t } = useI18n()

  return (
    <>
      <div className="md:col-span-2 lg:col-span-3 mt-4 mb-0 flex items-end">
        <h2 className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
          Experience...
        </h2>
      </div>

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

      <FocusBlock />
      <ContactBlock />

    </>
  )
}
