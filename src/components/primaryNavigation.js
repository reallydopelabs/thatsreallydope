"use client"

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

function checkActivePath(path) {
  const pathname = usePathname()

  if (path === "/" && pathname !== path) {
    return false
  }
  return pathname.startsWith(path)
}

export default function PrimaryNavigation() {
  return (
    <nav className="col-span-5 mt-6 text-center border-t border-neutral-400">
      <Link
        className={clsx(
          "inline-block p-3 mx-4 border-b-2",
          checkActivePath("/") ? "font-bold border-black" : "border-transparent"
        )}
        href="/"
      >
        Projects
      </Link>
      <Link
        className={clsx(
          "inline-block p-2 mx-4 border-b-2",
          checkActivePath("/ideas")
            ? "font-bold border-black"
            : "border-transparent"
        )}
        href="/ideas"
      >
        Ideas
      </Link>
      <Link
        className={clsx(
          "inline-block p-2 mx-4 border-b-2",
          checkActivePath("/about")
            ? "font-bold border-black"
            : "border-transparent"
        )}
        href="/about"
      >
        About
      </Link>
    </nav>
  )
}
