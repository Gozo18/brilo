import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="flex justify-center items-center lg:mt-14">
      <div className=" w-full max-w-[1404px] max-md:flex-wrap max-md:max-w-full">
        <div className="bg-indigo-50 h-2"></div>
        <div className="flex flex-col lg:flex-row lg:gap-5 lg:justify-between items-center px-8 py-16 w-full text-base leading-6">
          <Image
            src="/logoFooter.png"
            alt="Brilo"
            width={208}
            height={64}
            className="mb-8 lg:mb-0 lg:shrink-0 lg:self-stretch w-52 max-w-full aspect-[3.23]"
          />
          <div className="flex flex-col lg:flex-row gap-5 items-center lg:justify-between mb-8 lg:mb-0 font-bold text-emerald-500">
            <Link href="#">První proklik</Link>
            <Link href="#">Druhý proklik</Link>
            <Link href="#">Třetí proklik</Link>
          </div>
          <div className="font-medium text-blue-950">
            © 2022 Thalion All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
