import Button from "@/components/button"
import Star from "@/components/star"

export default function About() {
  return (
    <main className="px-4 md:px-0">
      <section className="my-8 space-y-8">
        <h3 className="mb-8 text-2xl">Welcome</h3>

        <p className="font-bold">
          Founded in 2020, Really Dope <Star /> is a creative studio
          specializing in design and engineering. Based out of LA and operating
          globally, our focus is utilizing our broad set of digital and physical
          product expertise to turn impossible visions into reality. Our
          partners appreciate the power of good design and trust us to deliver
          expert branding, strategy, creative direction, product development,
          and engineering solutions for their ventures.
        </p>

        <p className="font-bold">
          We are a tight-knit team of designers, engineers, and entrepreneurs
          with real industry experience across many disciplines. We&apos;ve
          designed and developed web strategy for massive brands like Virgin
          Group, engineered complex infrastructure at Stripe, scaled ecommerce
          solutions for global businesses, and directed creative for the most
          niche of brands. Perhaps more importantly, we are passionate about
          great design and precise development to create memorable experiences
          on and off-screen.
        </p>
      </section>

      <section className="my-16 -mx-3 md:-mx-12 py-16 px-12 bg-neutral-900 text-neutral-300 rounded-lg">
        <div className="font-display text-2xl font-bold uppercase text-center">
          <Star className="mx-1" />
          <Star className="mx-1" />
          <Star className="mx-1" />
          <p className="mt-4">
            We craft <em className="underline">modern experiences</em> that
            elevate brands across digital and physical spaces.
          </p>
          <Button className="mt-4 text-base" theme="light" href="/">
            View Our Work
          </Button>
        </div>
      </section>

      <section>
        <h3 className="mb-8 text-2xl">Services</h3>
        <div className="grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border-t border-neutral-900 pt-8 sm:border-l sm:border-t-0 sm:pl-2 sm:pt-0"
            >
              <div className="font-display font-bold text-sm uppercase">
                <span className="mb-1 block text-2xl font-light">
                  &#10036;&#xFE0E;
                </span>
                {service.name}
              </div>

              <div className="mt-10">
                <ul>
                  {service.includes.map((sub, j) => (
                    <li key={j} className="uppercase">
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="my-16">
        <h3 className="mb-8 text-2xl">Process</h3>
        <p className="font-bold">
          We&apos;ve spent years refining the way we work with our partners to
          simplify the process and maximize results. Our simple, three-step
          process to collaboration and execution applies to all of our services,
          ensuring strong and transparent partnerships.
        </p>

        <div className="my-12 space-y-8">
          {process.map((step, index) => (
            <div key={index} className="grid grid-cols-5 gap-8">
              <div className="col-span-1 font-display text-left sm:text-right">
                <p
                  className="text-lg uppercase"
                  dangerouslySetInnerHTML={{ __html: step.name }}
                ></p>
                <p className="text-5xl">{String(index + 1).padStart(2, "0")}</p>
              </div>

              <div className="col-span-4">
                <p className="">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="my-8 -mx-3 md:-mx-12 py-16 px-12 bg-neutral-900 text-neutral-300 rounded-lg">
        <div className="font-display text-2xl font-bold uppercase text-center">
          <Star className="mx-1" />
          <Star className="mx-1" />
          <Star className="mx-1" />
          <p className="mt-4">
            We are a tight-knit group of creators, innovators, and entrepreneurs
            that help brands and online creators turn impossible visions into
            reality.
          </p>
          <Button className="mt-4 text-base" theme="light" href="/contact">
            Get in Touch
          </Button>
        </div>
      </section>

      <section className="my-16">
        <h3 className="mb-8 text-2xl">Results</h3>
        <p className="font-bold">
          As a small team, we care deeply about every project and aim to build
          ongoing, long-term success with our clients. Read what some of them
          have to say about RD
          <Star />.
        </p>

        <div className=" max-w-md mt-12 space-y-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex items-end gap-2">
              <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-neutral-900">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.client}
                  className="object-fit grayscale"
                />
              </div>
              <figure>
                <figcaption className="ml-3 mb-1 text-sm text-neutral-500">
                  {testimonial.client} &mdash; {testimonial.role}
                </figcaption>

                <blockquote className="p-8 rounded-2xl bg-neutral-900 text-neutral-300">
                  <p className="text-lg leading-loose">
                    &ldquo;{testimonial.statement}&rdquo;
                  </p>
                </blockquote>
              </figure>
            </div>
          ))}
        </div>
      </section>

      <section className="my-8 text-center">
        <div className="font-display text-2xl font-bold uppercase text-center">
          <Star className="mx-1" />
          <Star className="mx-1" />
          <Star className="mx-1" />
          <p className="mt-4">Are you ready to build something dope?</p>
          <Button className="mt-4 text-base" href="/contact">
            Get in Touch
          </Button>
        </div>
      </section>
    </main>
  )
}

const services = [
  {
    name: "Branding",
    includes: [
      "Brand Strategy",
      "Visual Identity",
      "Copywriting",
      "Creative Direction",
    ],
  },
  {
    name: "Digital",
    includes: [
      "Web Design",
      "Web Development",
      "App Development",
      "Digital Experiences",
    ],
  },
  {
    name: "Media",
    includes: ["Photography", "Editorial Design", "Social Media Content"],
  },
  {
    name: "Ecommerce",
    includes: [
      "Platform Migrations",
      "Inventory Management",
      "Customer Management",
      "PIM Implementations",
      "Fulfillment",
      "Custom Integrations",
    ],
  },
  {
    name: "Product",
    includes: [
      "Discovery",
      "Vision & Strategy",
      "Competitive Research",
      "Market Analysis",
      "Development",
    ],
  },
  {
    name: "Consulting",
    includes: ["Engineering", "Platform Migrations", "Growth & Optimization"],
  },
]

const process = [
  {
    name: 'Dis<span class="sm:hidden">-</span><span class="block sm:hidden"></span>cover',
    description:
      "We work with you to nail down branding, voice, and creative direction prior to scoping out development of the project. This ensures the full creative vision is laid out and all costs are understood.",
  },
  {
    name: 'Ex<span class="sm:hidden">-</span><span class="block sm:hidden"></span>ecute',
    description:
      "Once all the requirements and costs are identified, we scope out the project and execute on our collaborative discovery. This is where we bring your idea to life.",
  },
  {
    name: "Refine",
    description:
      "We believe that a good product is never finished. True creativity is a constant refinement. We know how to analyze digital products in the wild and use that data to help you continuously move the line forward.",
  },
]

const testimonials = [
  {
    client: "JonCameron Johnson",
    role: "Founder, Etho",
    avatar: "/joncameron-johnson.jpg",
    statement:
      "I want to tell you right now, these guys are wizards. When it comes to the collaborative process they were extremely flexible. They took my ideas of branding and wire framing and were able to bring that vision to life. When it comes to the ability to think, the ability to create – RDD has got it. If you're thinking about using them, just do it. We'll be doing more business together in the future.",
  },
  {
    client: "Claire Lehmann",
    role: "CEO, Quillette",
    avatar: "/claire-lehmann.png",
    statement:
      "RDD's technical acumen and professional manner has been indispensable to our company. They respond to requests rapidly and deliver solutions with careful precision and attention to detail. Having a holistic attitude towards business, RDD has ensured that our company has greatly improved technical infrastructure while at the same time delivering extensive cost savings. Their services are highly recommended.",
  },
  {
    client: "Corey Mangold",
    role: "Entrepreneur",
    avatar: "/corey-mangold.png",
    statement:
      "I first met Sam in 2015 when we hired him at the creative agency I owned at the time. I knew it was only a matter of time before he would start his own thing. His work kicked ass and won us a ton of awards between 2015 and 2018. I've gone on to start several businesses since and use him and now RDD any time I need a website or custom software.",
  },
  {
    client: "Jeremy Sifuentes",
    role: "Realtor",
    avatar: "/jeremy-sifuentes.png",
    statement:
      "I went to RDD with an idea for my real estate website and they brought it to life. They made it look flawless and from that I've acquired numerous clients. If you're looking for a website to be professionally made, RDD is the choice!",
  },
  {
    client: "Kris Chase",
    role: "VP of Technology, Envoy",
    avatar: "/kris-chase.png",
    statement:
      "Rockstar developers with an impressive industry background, these guys know what they're doing.",
  },
]
