"use client"

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function PrimaryNavigation() {
  const pathname = usePathname()

  return (
    <nav className="col-span-5 mt-6 text-center border-t border-neutral-400">
      <Link
        className={clsx(
          "inline-block p-3 mx-4 border-b-2",
          pathname == "/" ? "font-bold border-black" : "border-transparent"
        )}
        href="/"
      >
        Projects
      </Link>
      <Link
        className={clsx(
          "inline-block p-2 mx-4 border-b-2",
          pathname == "/ideas" ? "font-bold border-black" : "border-transparent"
        )}
        href="/ideas"
      >
        Ideas
      </Link>
      <Link
        className={clsx(
          "inline-block p-2 mx-4 border-b-2",
          pathname == "/about" ? "font-bold border-black" : "border-transparent"
        )}
        href="/about"
      >
        About
      </Link>
    </nav>
  )
}
