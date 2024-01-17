import { StarIcon } from "@heroicons/react/24/solid"

export default function Ideas() {
  return (
    <main>
      <section className="mt-2 grid grid-cols-3 gap-2">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-end overflow-hidden bg-pink-600-800 aspect-square"
          >
            <h3 className="text-xl font-bold">Lorem ipsum dolor sit amet</h3>

            {index <= 2 ? (
              <StarIcon className="absolute top-2 right-2 w-5 text-white"></StarIcon>
            ) : (
              ""
            )}
          </div>
        ))}
      </section>
    </main>
  )
}
