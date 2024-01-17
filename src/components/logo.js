import Image from "next/image"

export default function Logo(props) {
  return (
    <Image
      {...props}
      src="/logo.png"
      width={200}
      height={200}
      alt="Picture of the author"
    />
  )
}
