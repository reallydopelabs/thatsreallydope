"use client"

import { useState, useEffect } from "react"
import { getClientProjects } from "@/lib/projects"
import { getUploadUrlFromStrapiData } from "@/lib/strapi"
import Tile from "@/components/tile"
import Error from "next/error"

function renderProject(project) {
  const tileData = {
    href: `/projects/${project.attributes.slug}`,
    image: project.attributes.tile_image.data
      ? getUploadUrlFromStrapiData(project.attributes.tile_image.data, "s")
      : null,
    title: project.attributes.title,
    pinned: false,
  }

  return <Tile data={tileData} />
}

export default function ClientProjects({ params }) {
  const [projects, setProjects] = useState(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    getClientProjects(params.slug)
      .then((data) => {
        if (data) {
          setProjects(data.data)
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
    <main>
      <section className="py-2 grid grid-cols-3 gap-2">
        {projects.map((project) => renderProject(project))}
      </section>
    </main>
  )
}
