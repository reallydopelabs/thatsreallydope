import { strapiUrl } from "./strapi"

export async function getProjects() {
  const res = await fetch(
    `${strapiUrl}/api/projects?filters[pin][$eq]=false&sort=id:desc&populate=tile_image`
  )

  if (!res.ok) {
    throw new Error("Failed to fetch projects")
  }

  return res.json()
}

export async function getPinnedProjects() {
  const res = await fetch(
    `${strapiUrl}/api/projects?filters[pin][$eq]=true&sort=updatedAt:desc&pagination[limit]=3&populate=*`
  )

  if (!res.ok) {
    throw new Error("Failed to fetch pinned projects")
  }

  return res.json()
}

export async function getProjectBySlug(slug) {
  const res = await fetch(
    `${strapiUrl}/api/projects?filters[slug][$eq]=${slug}&populate=deep`
  )

  if (!res.ok) {
    throw new Error("Failed to fetch project")
  }

  const data = await res.json()
  return data.data[0] // Assuming the response contains an array of projects
}

export async function getClientProjects(clientSlug) {
  const res = await fetch(
    `${strapiUrl}/api/projects?filters[client][slug][$eq]=${clientSlug}&sort=id:desc&populate=*`
  )

  if (!res.ok) {
    throw new Error("Failed to fetch projects")
  }

  return res.json()
}
