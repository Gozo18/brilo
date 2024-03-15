"use client"

import Image from "next/image"
import Link from "next/link"

export default function Header() {
  function handleOpenMenu() {
    const element = document.getElementById("nav")
    if (element != null) {
      element.classList.remove("right-[-100%]")
      element.classList.add("right-0")
    }
  }
  function handleCloseMenu() {
    const element = document.getElementById("nav")
    if (element != null) {
      element.classList.remove("right-0")
      element.classList.add("right-[-100%]")
    }
  }
  function handleSubMenu(id: string) {
    const element = document.getElementById(id)
    if (element != null) {
      if (element.classList.contains("open")) {
        element.classList.remove("flex", "open")
        element.classList.add("hidden")
        console.log("in")
      } else {
        element.classList.remove("hidden")
        element.classList.add("flex", "open")
      }
    }
  }
  return (
    <header className="sticky top-0 lg:relative flex justify-center items-center py-7 text-sm font-bold leading-6 uppercase whitespace-nowrap bg-white text-blue-950">
      <div className="flex gap-5 justify-between w-full max-w-[1404px] px-5 2xl:px-0">
        <Link href="#">
          <Image
            loading="lazy"
            src="/logo.png"
            className="shrink-0 max-w-full aspect-[2.86] w-[136px]"
            alt=""
            width={136}
            height={48}
          />
        </Link>
        <nav className="">
          <button
            className="flex lg:hidden items-center text-blue-950 p-3 scale-[2]"
            onClick={handleOpenMenu}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
          <ul
            className="fixed top-0 right-[-100%] bg-white w-[100vw] h-[100vh] z-10 p-10 lg:p-0 lg:right-0 lg:w-auto lg:h-auto lg:relative lg:flex lg:gap-5 lg:justify-between lg:items-center lg:px-2 lg:my-auto transition-all max-lg:overflow-scroll"
            id="nav"
          >
            <li className="flex justify-between mb-8 lg:hidden">
              <div className="text-2xl">Menu</div>
              <div>
                <button className="scale-[2]" onClick={handleCloseMenu}>
                  <svg
                    className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
            <li className="relative grow self-stretch my-3 lg:my-auto border-b-2 lg:border-b-0 py-1 lg:py-0">
              <Link
                href="#"
                className="lg:hover:before:block lg:hover:before:absolute before:w-full before:h-1 before:bg-emerald-400 before:top-6"
              >
                O nás
              </Link>
            </li>
            <li className="group/menu">
              <div
                className="relative flex gap-1 justify-center self-stretch my-3 lg:my-auto border-b-2 lg:border-b-0 py-1 lg:py-0.5"
                onClick={() => handleSubMenu("sub1")}
              >
                <div className="grow">Služby</div>
                <Image
                  loading="lazy"
                  src="/arrow.svg"
                  className="shrink-0 my-auto w-4 aspect-square"
                  alt=""
                  width={16}
                  height={16}
                />
              </div>
              <ul
                className="lg:absolute flex-col text-sm font-bold leading-6 uppercase whitespace-nowrap lg:rounded-lg lg:shadow-sm lg:max-w-[240px] text-blue-950 hidden lg:group-hover/menu:flex"
                id="sub1"
              >
                <li className="justify-center items-start py-3 lg:py-4 lg:pr-16 pl-4 w-full bg-white border-b lg:border-indigo-50 border-solid">
                  <Link href="#">Submenu</Link>
                </li>
                <li className="justify-center items-start py-3 lg:py-4 lg:pr-16 pl-4 w-full bg-white border-b lg:border-indigo-50 border-solid">
                  <Link href="#">Submenu</Link>
                </li>
                <li className="group/submenu">
                  <div
                    className="relative flex gap-5 justify-between py-3 px-4 lg:p-4 w-full bg-white border-b lg:border-indigo-50 border-solid"
                    onClick={() => handleSubMenu("sub2")}
                  >
                    <div>Submenu</div>
                    <Image
                      loading="lazy"
                      src="/arrowLeft.svg"
                      alt="Alt text"
                      width={16}
                      height={16}
                      className="shrink-0 my-auto w-4 aspect-square hidden lg:block"
                    />
                    <Image
                      loading="lazy"
                      src="/arrow.svg"
                      className="shrink-0 my-auto w-4 aspect-square lg:hidden"
                      alt=""
                      width={16}
                      height={16}
                    />
                  </div>
                  <ul
                    className="lg:absolute top-0 lg:left-[156px] flex-col text-sm font-bold leading-6 uppercase whitespace-nowrap lg:rounded-lg lg:shadow-sm lg:max-w-[240px] text-blue-950 hidden lg:group-hover/submenu:flex"
                    id="sub2"
                  >
                    <li className="justify-center items-start py-3 lg:py-4 lg:pr-16 pl-8 lg:pl-4 w-full bg-white border-b lg:border-indigo-50 border-solid">
                      <Link href="#">Submenu</Link>
                    </li>
                    <li className="justify-center items-start py-3 lg:py-4 lg:pr-16 pl-8 lg:pl-4 w-full bg-white border-b lg:border-indigo-50 border-solid">
                      <Link href="#">Submenu</Link>
                    </li>
                    <li className="justify-center items-start py-3 lg:py-4 lg:pr-16 pl-8 lg:pl-4 w-full bg-white border-b lg:border-indigo-50 border-solid">
                      <Link href="#">Submenu</Link>
                    </li>
                    <li className="justify-center items-start py-3 lg:py-4 lg:pr-16 pl-8 lg:pl-4 w-full bg-white border-b lg:border-indigo-50 border-solid">
                      <Link href="#">Submenu</Link>
                    </li>
                  </ul>
                </li>
                <li className="justify-center items-start py-3 lg:py-4 lg:pr-16 pl-4 w-full bg-white border-b lg:border-indigo-50 border-solid">
                  <Link href="#">Submenu</Link>
                </li>
              </ul>
            </li>
            <li className="relative self-stretch my-3 lg:my-auto border-b-2 lg:border-b-0 py-1 lg:py-0">
              <Link
                href="#"
                className="lg:hover:before:block lg:hover:before:absolute before:w-full before:h-1 before:bg-emerald-400 before:top-6"
              >
                Aktuality
              </Link>
            </li>
            <li className="relative self-stretch my-3 lg:my-auto border-b-2 lg:border-b-0 py-1 lg:py-0">
              <Link
                href="#"
                className="lg:hover:before:block lg:hover:before:absolute before:w-full before:h-1 before:bg-emerald-400 before:top-6"
              >
                Novinky
              </Link>
            </li>
            <li className="relative grow self-stretch my-3 lg:my-auto border-b-2 lg:border-b-0 py-1 lg:py-0">
              <Link
                href="#"
                className="lg:hover:before:block lg:hover:before:absolute before:w-full before:h-1 before:bg-emerald-400 before:top-6"
              >
                Kontakty
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
