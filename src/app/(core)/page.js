import Link from "next/link"
import { getPinnedProjects, getProjects } from "@/lib/projects"
import { getUploadUrlFromStrapiData } from "@/lib/strapi"
import Tile from "@/components/tile"

function renderProject(project, pinned) {
  const tileData = {
    href: `/projects/${project.attributes.slug}`,
    image: project.attributes.tile_image.data
      ? getUploadUrlFromStrapiData(project.attributes.tile_image.data, "s")
      : null,
    title: project.attributes.title,
    pinned: pinned,
  }

  return <Tile data={tileData} />
}

export default async function Home() {
  let projects = []
  let pinnedProjects = []

  try {
    const data = await getProjects()
    projects = data.data

    const pinnedData = await getPinnedProjects()
    pinnedProjects = pinnedData.data
  } catch (error) {
    console.error("Error fetching projects:", error)
  }

  return (
    <main>
      <section className="py-2 grid grid-cols-3 gap-[1px] lg:gap-1">
        {pinnedProjects.map((project) => renderProject(project, true))}
        {projects.map((project) => renderProject(project))}
      </section>
    </main>
  )
}
