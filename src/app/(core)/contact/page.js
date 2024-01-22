import Star from "@/components/star"
import Button from "@/components/button"

export default function Contact() {
  return (
    <main>
      <section className="my-8 text-center">
        <div className="font-display font-bold mb-3">
          <Star className="mx-1" />
          <Star className="mx-1" />
          <Star className="mx-1" />
        </div>

        <h3 className="mb-8 text-2xl">
          Are you ready to build something dope?
        </h3>

        <p className="font-bold">
          We're here for it. Schedule a call with our team or email us at{" "}
          <a className="underline" href="mailto:hey@thatsrdd.com">
            hey@thatsrdd.com
          </a>
          .
        </p>

        <Button
          className="mt-8 text-base"
          href="https://calendar.app.google/1yaZ2KKUVHZ8pqz99"
        >
          Schedule a Call
        </Button>
      </section>
    </main>
  )
}
