import Image from "next/image"
import Button from "./Button"

interface Props {
  title: string
  description: string
  listitem1: string
  listitem2: string
  listitem3: string
  listitem4: string
  buttonText: string
  image: string
}

export default function ColoredSection({
  title,
  description,
  listitem1,
  listitem2,
  listitem3,
  listitem4,
  buttonText,
  image,
}: Props) {
  return (
    <section className="flex justify-center items-center self-stretch px-5 lg:px-16 py-10 lg:py-20 w-full bg-indigo-50 max-lg:max-w-full">
      <div className="mt-0 lg:mt-8 mb-0 lg:mb-2.5 w-full max-w-[1408px] max-lg:max-w-full">
        <div className="flex gap-5 max-lg:flex-col max-lg:gap-0">
          <div className="flex flex-col w-6/12 max-lg:ml-0 max-lg:w-full order-2 lg:order-1">
            <div className="flex flex-col grow justify-center max-lg:mt-10 max-lg:max-w-full">
              <Image
                src={image}
                alt={title}
                width={704}
                height={472}
                className="w-full aspect-[1.49] max-lg:max-w-full"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-lg:ml-0 max-lg:w-full order-1 lg:order-2">
            <div className="flex flex-col items-center lg:items-start font-bold text-blue-950 max-lg:max-w-full">
              <h2 className="text-center lg:text-left text-3xl max-lg:max-w-full">
                {title}
              </h2>
              <div className="mt-4 lg:pr-8 text-center lg:text-left text-base font-medium leading-6 max-lg:max-w-full">
                {description}
                <ul className="mt-8 text-center lg:text-left">
                  <li>{listitem1}</li>
                  <li>{listitem2}</li>
                  <li>{listitem3}</li>
                  <li>{listitem4}</li>
                </ul>
              </div>
              <div>
                <Button
                  text={buttonText}
                  variant="primary"
                  addClass="mt-16 max-lg:px-5 max-lg:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
