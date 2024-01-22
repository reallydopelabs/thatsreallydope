import "../globals.css"
import Link from "next/link"
import Logo from "@/components/logo"

export const metadata = {
  title: "REALLY DOPE",
  description:
    "We are a tight-knit group of creators, innovators, and entrepreneurs that help brands and online creators turn impossible visions into reality.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="mx-auto w-full max-w-4xl font-text">
        {children}
        <footer className="py-6">
          <p className="text-xs font-bold text-neutral-500 text-center">
            Really Dope Digital LLC&copy;
          </p>
        </footer>
      </body>
    </html>
  )
}
