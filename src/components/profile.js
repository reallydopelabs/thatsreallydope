import Link from "next/link"

export default function Profile({ data }) {
  return (
    <div className="flex gap-3 items-center">
      <div className="w-12 h-12 rounded-full bg-black overflow-hidden">
        <Link href={data.href}>
          <img
            src={data.image}
            className="w-full h-full object-cover object-center"
            alt={data.title}
          />
        </Link>
      </div>
      <div className="font-bold">
        <Link href={data.href} className="block py-2">
          {data.title}
        </Link>
      </div>
    </div>
  )
}
