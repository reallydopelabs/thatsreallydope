export async function getClients() {
  const res = await fetch(
    "http://localhost:1337/api/clients?sort=title:asc&populate=icon"
  )

  if (!res.ok) {
    throw new Error("Failed to fetch clients")
  }

  return res.json()
}
