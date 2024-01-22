"use client"

import { Popover } from "@headlessui/react"
import { EnvelopeIcon } from "@heroicons/react/24/solid"

export default function ContactPopup() {
  return (
    <Popover className="relative">
      <Popover.Button className="flex items-center justify-center rounded text-sm font-bold bg-neutral-500 text-white h-8 px-8">
        Contact
      </Popover.Button>

      <Popover.Panel className="absolute top-10 right-0 w-64 p-3 bg-neutral-500 text-white rounded">
        <EnvelopeIcon className="h-4 inline-block mr-2" /> hey@thatsrdd.com
      </Popover.Panel>
    </Popover>
  )
}
