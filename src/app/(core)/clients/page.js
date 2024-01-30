import { getClients } from "@/lib/clients"
import Profile from "@/components/profile"
import { getUploadUrlFromStrapiData } from "@/lib/strapi"
import { inspectJSON } from "@/lib/debug"

function renderClient(client) {
  return (
    <div className="rounded-full overflow-hidden">
      <Profile
        data={{
          href: `/clients/${client.attributes.slug}`,
          image: client.attributes.icon.data
            ? getUploadUrlFromStrapiData(client.attributes.icon.data, "xs")
            : null,
          title: client.attributes.title,
        }}
      />
    </div>
  )
}

export default async function Home() {
  let clients = []

  try {
    const data = await getClients()
    clients = data.data
  } catch (error) {
    console.error("Error fetching clients:", error)
  }

  return (
    <main className="px-4 md:px-0">
      <section className="py-2 space-y-3">
        {clients.map((client) => renderClient(client))}
      </section>
    </main>
  )
}
