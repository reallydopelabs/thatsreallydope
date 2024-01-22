"use client"

import Link from "next/link"
import Logo from "@/components/logo"
import { getProjectBySlug } from "@/lib/projects"
import { useState, useEffect } from "react"
import Error from "next/error"
import { BlocksRenderer } from "@strapi/blocks-react-renderer"
import { inspectJSON } from "@/lib/debug"
import { getUploadUrlFromStrapiData } from "@/lib/strapi"
import { XMarkIcon } from "@heroicons/react/24/solid"

export default function Project({ params }) {
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    getProjectBySlug(params.slug)
      .then((data) => {
        if (data) {
          setProject(data)
        } else {
          setNotFound(true)
        }
      })
      .catch((error) => {
        console.error("Error fetching project:", error)
        setNotFound(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [params.slug])

  if (loading) return <p>Loading...</p>
  if (notFound)
    return <Error statusCode={404} title="This project could not be found" />

  return (
    <main className="md:mt-4 grid grid-cols-1 md:grid-cols-2 items-start border border-neutral-400 h-[90vh] overflow-scroll">
      <div className="order-last md:order-first">
        {project.attributes.showcase.data &&
          project.attributes.showcase.data.map((imageData) => (
            <img src={getUploadUrlFromStrapiData(imageData)} />
          ))}
      </div>
      <div className="md:sticky md:top-0">
        <header className="sticky top-0 md:relative p-6 flex items-center gap-6 border-b border-neutral-400 bg-neutral-300">
          <div className="relative">
            <Link href="/">
              <Logo className="w-8 h-8 rounded-full" />
            </Link>

            <Link
              href={
                project.attributes.client.data
                  ? `/clients/${project.attributes.client.data.attributes.slug}`
                  : "/"
              }
            >
              {project.attributes.client.data?.attributes.icon.data ? (
                <img
                  src={getUploadUrlFromStrapiData(
                    project.attributes.client.data?.attributes.icon.data,
                    "xs"
                  )}
                  className="w-8 h-8 rounded-full absolute top-4 left-4"
                />
              ) : (
                <div className="w-8 h-8 rounded-full absolute top-4 left-4 bg-black"></div>
              )}
            </Link>
          </div>
          <div className="text-sm text-neutral-600">
            <Link href="/" className="font-bold text-neutral-900">
              reallydopestudio
            </Link>{" "}
            and{" "}
            <Link
              href={
                project.attributes.client.data
                  ? `/clients/${project.attributes.client.data.attributes.slug}`
                  : "/"
              }
              className="font-bold text-neutral-900"
            >
              {project.attributes.client.data
                ? project.attributes.client.data.attributes.handle
                : "null"}
            </Link>
          </div>

          <Link href="/" className="block ml-auto">
            <XMarkIcon className="w-8" />
          </Link>
        </header>

        <section className="p-6">
          {project.attributes.description && (
            <BlocksRenderer content={project.attributes.description} />
          )}
        </section>
      </div>
    </main>
  )
}
