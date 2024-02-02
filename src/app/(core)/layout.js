import { MapPinIcon, UserPlusIcon } from "@heroicons/react/24/solid"
import "../globals.css"
import Link from "next/link"
import Logo from "@/components/logo"
import ContactPopup from "@/components/contactPopup"
import { strapiUrl } from "@/lib/strapi"

async function getHeaderData() {
  const headerRes = await fetch(`${strapiUrl}/api/header?populate=*`)

  if (!headerRes.ok) {
    throw new Error("Failed to fetch header")
  }

  const data = await headerRes.json()

  return data.data.attributes
}

async function getClientCount() {
  const response = await fetch(`${strapiUrl}/api/clients?pagination[limit]=1`)

  if (!response.ok) {
    console.warn("Failed to fetch client count")
    return "many" // graceful fallback
  }

  const data = await response.json()
  return data.meta.pagination.total
}

export const metadata = {
  title: "REALLY DOPE",
  description:
    "We are a tight-knit group of creators, innovators, and entrepreneurs that help brands and online creators turn impossible visions into reality.",
}

export default async function RootLayout({ children }) {
  const headerData = await getHeaderData()
  const clientCount = await getClientCount()

  return (
    <html lang="en">
      <body className="mx-auto w-full max-w-2xl font-text">
        <header className="grid grid-cols-5 sm:pt-10">
          <div className="col-span-5 grid items-center grid-cols-5 gap-8 py-6 px-4 sm:hidden">
            <div className="col-span-2">
              <Link href="/">
                <Logo className="rounded-full" />
              </Link>
            </div>
            <div className="col-span-3">
              <Link href="/" className="mb-4 text-lg">
                thatsreallydope.com
              </Link>
              <div className="flex items-center gap-1">
                <ContactPopup />
                <Link
                  href="https://instagram.com/reallydopestudio"
                  className="flex items-center justify-center rounded text-sm font-bold bg-neutral-500 text-white h-8 w-8 text-center"
                >
                  <UserPlusIcon className="h-4"></UserPlusIcon>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-5 col-span-5">
            <div className="hidden sm:block col-span-2">
              <Link href="/">
                <Logo className="rounded-full" />
              </Link>
            </div>
            <div className="col-span-5 px-4 sm:col-span-3">
              <div className="hidden sm:flex sm:items-center sm:gap-4 sm:mb-8">
                <Link href="/" className="text-lg">
                  thatsreallydope.com
                </Link>
                <div className="flex items-center gap-1">
                  <ContactPopup />
                  <Link
                    href="https://instagram.com/reallydopestudio"
                    className="flex items-center justify-center rounded text-sm font-bold bg-neutral-500 text-white h-8 w-8 text-center"
                  >
                    <UserPlusIcon className="h-4"></UserPlusIcon>
                  </Link>
                </div>
              </div>
              <h1 className="uppercase font-bold">{headerData.title}</h1>
              <p className="mt-3 text-sm">{headerData.bio}</p>
              <p className="text-sm">
                <MapPinIcon className="-mt-1 w-3 inline-block"></MapPinIcon>{" "}
                {headerData.location}
              </p>
              {headerData.featured_clients?.data && (
                <p className="mt-3 text-xs font-bold text-neutral-500">
                  Contracted by{" "}
                  {headerData.featured_clients.data.map((client, index) => (
                    <span key={index}>
                      <Link
                        href={`/clients/${client.attributes.slug}`}
                        className="text-neutral-900"
                      >
                        {client.attributes.title}
                      </Link>
                      ,{" "}
                    </span>
                  ))}{" "}
                  +{" "}
                  <Link href="/clients">
                    {clientCount - headerData.featured_clients.data.length} more
                  </Link>
                </p>
              )}
            </div>
          </div>

          <nav className="col-span-5 mt-6 text-center border-t border-neutral-400">
            <Link className="inline-block p-2 mx-4" href="/">
              Projects
            </Link>
            <Link className="inline-block p-2 mx-4" href="/ideas">
              Ideas
            </Link>
            <Link className="inline-block p-4 mx-4" href="/about">
              About
            </Link>
          </nav>
        </header>
        {children}
        <footer className="mt-4 border-t border-neutral-400 py-6">
          <p className="text-xs font-bold text-neutral-500 text-center">
            Really Dope Digital LLC&copy;
          </p>
        </footer>
      </body>
    </html>
  )
}
