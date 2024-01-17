import Link from "next/link"
import Star from "@/components/star"
import { getPinnedProjects, getProjects } from "@/lib/projects"
import { inspectJSON } from "@/lib/debug"
import { getUploadUrlFromStrapiData } from "@/lib/strapi"

function renderProject(project, pinned) {
  return (
    <div
      key={project.id}
      className="relative overflow-hidden bg-black aspect-square flex items-center justify-center text-center"
    >
      <Link href={`/projects/${project.attributes.slug}`}>
        {project.attributes.tile_image.data ? (
          <div className="relative group">
            <img
              src={getUploadUrlFromStrapiData(
                project.attributes.tile_image.data,
                "s"
              )}
              className="w-full h-full object-cover object-center"
              alt={project.attributes.title}
            />

            <div className="opacity-0 transition-all absolute top-0 left-0 bg-neutral-900 group-hover:opacity-50 w-full h-full"></div>
            <div className="opacity-0 transition-all group-hover:opacity-100 flex absolute top-0 left-0 w-full h-full items-center justify-center text-neutral-300">
              <h3 className="text-white uppercase">
                {project.attributes.title}
              </h3>
            </div>
          </div>
        ) : (
          <h3 className="text-white uppercase">{project.attributes.title}</h3>
        )}
      </Link>

      {pinned && (
        <Star className="absolute top-2 right-2 text-white text-2xl leading-none" />
      )}
    </div>
  )
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
      <section className="py-2 grid grid-cols-3 gap-2">
        {pinnedProjects.map((project) => renderProject(project, true))}
        {projects.map((project) => renderProject(project))}
      </section>
    </main>
  )
}
