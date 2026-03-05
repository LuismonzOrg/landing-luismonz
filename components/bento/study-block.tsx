import {
  Terminal,
  Atom,
  Sigma,
  BookOpen,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface StudyBlockProps {
  title: string
  description: string
  topics: string[]
  icon: "cs" | "physics" | "math" | "theology"
  serif?: boolean
}

const iconMap: Record<string, LucideIcon> = {
  cs: Terminal,
  physics: Atom,
  math: Sigma,
  theology: BookOpen,
}

export function StudyBlock({
  title,
  description,
  topics,
  icon,
  serif = false,
}: StudyBlockProps) {
  const Icon = iconMap[icon]

  return (
    <div className="group flex flex-col justify-between border border-border p-6 md:p-8 transition-colors hover:bg-secondary/50">
      <div>
        <div className="mb-6 flex items-start justify-between">
          <Icon
            className="text-foreground"
            size={20}
            strokeWidth={1.5}
          />
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            {icon === "cs" && "01"}
            {icon === "physics" && "02"}
            {icon === "math" && "03"}
            {icon === "theology" && "04"}
          </span>
        </div>

        <h2
          className={`mb-2 text-lg tracking-tight text-foreground ${
            serif ? "font-serif" : "font-sans font-medium"
          }`}
        >
          {title}
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {topics.map((topic) => (
          <span
            key={topic}
            className="border border-border px-2 py-0.5 font-mono text-[10px] tracking-wider text-muted-foreground uppercase"
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  )
}
