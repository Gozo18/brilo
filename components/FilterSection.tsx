"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

type Data = {
  title: string
  description: string
  image: string
  link: string
  type: string
}

const data: Data[] = [
  {
    title: "Látkové tašky s potiskem",
    description:
      "Dlouhá význam s sionismu ty, jí antény i sezona, bílá malých izolovány uvést masové vodě",
    image: "/filter1.png",
    link: "#",
    type: "latkove",
  },
  {
    title: "Látkové tašky bez potisku",
    description: "Dlouhá význam s sionismu ty, jí antény i sezona",
    image: "/filter2.png",
    link: "#",
    type: "latkove",
  },
  {
    title: "Bílé papírové tašky",
    description:
      "Dlouhá význam s sionismu ty, jí antény i sezona, bílá malých izolovány uvést masové vodě",
    image: "/filter3.png",
    link: "#",
    type: "papirove",
  },
  {
    title: "Barevné papírové tašky na dárky",
    description:
      "Dlouhá význam s sionismu ty, jí antény i sezona, bílá malých izolovány uvést masové vodě",
    image: "/filter4.png",
    link: "#",
    type: "papirove",
  },
  {
    title: "Papírové tašky z recyklovatelného materiálu",
    description: "Dlouhá význam s sionismu ty, jí antény i sezona",
    image: "/filter5.png",
    link: "#",
    type: "papirove",
  },
  {
    title: "Igelitové sáčky s logem",
    description:
      "Dlouhá význam s sionismu ty, jí antény i sezona, bílá malých izolovány uvést masové vodě",
    image: "/filter6.png",
    link: "#",
    type: "igelitove",
  },
  {
    title: "Velké igelitové tašky s potiskem",
    description:
      "Dlouhá význam s sionismu ty, jí antény i sezona, bílá malých izolovány uvést masové vodě",
    image: "/filter7.png",
    link: "#",
    type: "igelitove",
  },
]

export default function FilterSection() {
  const [items, setItems] = useState<Data[]>(data)

  function handleItems(type: string, e: any) {
    document
      .querySelectorAll(".filterButton")
      .forEach((el) =>
        el.classList.remove("text-white", "bg-blue-600", "border-blue-600")
      )
    document
      .querySelectorAll(".filterButton")
      .forEach((el) =>
        el.classList.add(
          "text-emerald-500",
          "bg-white",
          "border-indigo-50",
          "hover:bg-indigo-50",
          "hover:text-blue-950"
        )
      )
    e.classList.remove(
      "text-emerald-500",
      "bg-white",
      "border-indigo-50",
      "hover:bg-indigo-50",
      "hover:text-blue-950"
    )
    e.classList.add("text-white", "bg-blue-600", "border-blue-600")

    function checkItem(bag: Data) {
      return bag.type === type
    }

    const result = data.filter(checkItem)

    setItems(result)
  }

  function handleAllItems(e: any) {
    document
      .querySelectorAll(".filterButton")
      .forEach((el) =>
        el.classList.remove("text-white", "bg-blue-600", "border-blue-600")
      )
    document
      .querySelectorAll(".filterButton")
      .forEach((el) =>
        el.classList.add(
          "text-emerald-500",
          "bg-white",
          "border-indigo-50",
          "hover:bg-indigo-50",
          "hover:text-blue-950"
        )
      )
    e.classList.remove(
      "text-emerald-500",
      "bg-white",
      "border-indigo-50",
      "hover:bg-indigo-50",
      "hover:text-blue-950"
    )
    e.classList.add("text-white", "bg-blue-600", "border-blue-600")

    setItems(data)
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center pb-20 mt-8 lg:mt-28 w-full max-w-[1408px] max-md:max-w-full">
        <h2 className="px-5 lg:px-0 text-3xl font-bold text-center text-blue-950 max-md:max-w-full">
          Vyberte jednu z nabízených služeb
        </h2>
        <p className="mt-6 px-5 lg:px-0 text-base font-medium leading-6 text-center text-blue-950 w-full lg:w-[928px] max-md:max-w-full">
          Hlasu zkrátka nevratné duší indičtí půlkilometrová začali nutné už od
          středisko. Společných snažila líně budoucnost začne vloženy stal
          objevováním, umělé cílem starým dne větvičky názvy moři zabíjí.
        </p>
        <div className="flex gap-5 justify-between px-5 mt-16 text-sm font-bold leading-6 text-emerald-500 uppercase whitespace-nowrap max-md:flex-wrap max-md:mt-10">
          <button
            className="grow justify-center px-10 py-4 text-white uppercase bg-blue-600 rounded-lg border border-blue-600 border-solid shadow-sm max-md:px-5 filterButton"
            onClick={(event: React.MouseEvent<HTMLElement>) =>
              handleAllItems(event.target as any)
            }
          >
            všechno
          </button>
          <button
            className="grow justify-center px-10 py-4 bg-white uppercase rounded-lg border border-indigo-50 border-solid shadow-sm max-md:px-5 hover:bg-indigo-50 hover:text-blue-950 filterButton"
            onClick={(event: React.MouseEvent<HTMLElement>) =>
              handleItems("papirove", event.target as any)
            }
          >
            Papírové tašky
          </button>
          <button
            className="grow justify-center px-10 py-4 bg-white uppercase rounded-lg border border-indigo-50 border-solid shadow-sm max-md:px-5 hover:bg-indigo-50 hover:text-blue-950 filterButton"
            onClick={(event: React.MouseEvent<HTMLElement>) =>
              handleItems("latkove", event.target as any)
            }
          >
            látkové tašky
          </button>
          <button
            className="grow justify-center px-10 py-4 bg-white uppercase rounded-lg border border-indigo-50 border-solid shadow-sm max-md:px-5 hover:bg-indigo-50 hover:text-blue-950 filterButton"
            onClick={(event: React.MouseEvent<HTMLElement>) =>
              handleItems("igelitove", event.target as any)
            }
          >
            Igelitové tašky
          </button>
        </div>

        <div className="mt-8 w-full">
          <div className="flex gap-0 lg:gap-5 justify-center flex-wrap">
            {items.map((item, i) => (
              <div
                className="w-full px-5 sm:px-0 sm:w-[328px] transition-all"
                key={i}
              >
                <div className="flex flex-col items-center pb-8 font-bold leading-6 text-blue-950">
                  <Image
                    loading="lazy"
                    src={item.image}
                    className="w-full aspect-square"
                    alt={item.title}
                    width={500}
                    height={500}
                  />
                  <h3 className="mt-4 h-16 text-xl leading-8 text-center">
                    {item.title}
                  </h3>
                  <p className="mt-2 h-16 text-base font-medium text-center">
                    {item.description}
                  </p>
                  <Link href={item.link}>
                    <Button
                      text="Zjistit více"
                      variant="primary"
                      addClass="mt-6 text-sm max-md:px-5"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
