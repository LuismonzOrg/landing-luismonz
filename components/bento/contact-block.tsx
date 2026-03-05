"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

const links = [
  {
    label: "GitHub",
    href: "https://github.com/luismonz",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/luismonz",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:LRMA26@outlook.com",
    icon: Mail,
  },
]

export function ContactBlock() {
  const { t } = useI18n()

  return (
    <div className="flex flex-col justify-between border border-border p-6 md:p-8">
      <div className="mb-6">
        <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
          {t.contact.label}
        </span>
      </div>

      <div className="space-y-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-foreground transition-colors hover:text-muted-foreground"
          >
            <link.icon size={16} strokeWidth={1.5} />
            <span className="text-sm">{link.label}</span>
            <span className="ml-auto font-mono text-[10px] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
              {"->"}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
