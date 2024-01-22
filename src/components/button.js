import clsx from "clsx"
import Link from "next/link"

const themes = {
  dark: "text-neutral-900 border-neutral-900 hover:text-neutral-300 hover:bg-neutral-900",
  light:
    "text-neutral-300 border-neutral-300 hover:text-neutral-900 hover:bg-neutral-300",
}

export default function Button({ href, className, theme, children }) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex h-10 items-center justify-center border-b-2 font-bold uppercase tracking-wide bg-transparent shrink-0",
        themes[theme ?? "dark"],
        className
      )}
    >
      {children}
    </Link>
  )
}
