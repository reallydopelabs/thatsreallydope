import { strapiUrl } from "./strapi"

export async function getClients() {
  const res = await fetch(
    `${strapiUrl}/api/clients?sort=title:asc&populate=icon`
  )

  if (!res.ok) {
    throw new Error("Failed to fetch clients")
  }

  return res.json()
}
