import Link from "next/link"
import Star from "./star"

export default function Tile({ data }) {
  return (
    <div className="relative overflow-hidden bg-black aspect-square flex items-center justify-center text-center">
      <Link href={data.href}>
        {data.image ? (
          <div className="relative group">
            <img
              src={data.image}
              className="w-full h-full object-cover object-center"
              alt={data.title}
            />

            <div className="opacity-0 transition-all absolute top-0 left-0 bg-neutral-900 group-hover:opacity-50 w-full h-full"></div>
            <div className="opacity-0 transition-all group-hover:opacity-100 flex absolute top-0 left-0 w-full h-full items-center justify-center text-neutral-300">
              <h3 className="text-white uppercase text-xs lg:text-base">
                {data.title}
              </h3>
            </div>
          </div>
        ) : (
          <h3 className="text-white uppercase text-xs sm:text-base">
            {data.title}
          </h3>
        )}
      </Link>

      {data.pinned && (
        <Star className="absolute top-2 right-2 text-white text-lg sm:text-2xl leading-none" />
      )}
    </div>
  )
}
