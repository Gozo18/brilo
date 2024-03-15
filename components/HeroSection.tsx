import Image from "next/image"
import Button from "./Button"

interface Props {
  title: string
  description: string
  image: string
  primaryButtonText: string
  secondaryButtonText: string
}

export default function HeroSection({
  title,
  description,
  image,
  primaryButtonText,
  secondaryButtonText,
}: Props) {
  return (
    <section className="flex justify-center">
      <div className="mb-8 lg:mb-28 w-full max-w-[1408px] max-lg:max-w-full">
        <div className="flex gap-5 max-lg:flex-col max-lg:gap-0">
          <div className="flex flex-col w-6/12 max-lg:ml-0 max-lg:w-full">
            <div className="flex flex-col self-stretch px-5 2xl:px-0 2xl:pr-4 my-auto font-bold leading-6 max-lg:max-w-full">
              <h1 className="text-center lg:text-left text-5xl leading-[56.16px] text-blue-950 max-lg:max-w-full max-lg:text-4xl">
                {title}
              </h1>
              <p className="mt-4 text-center lg:text-left text-base font-medium text-blue-950 max-lg:max-w-full">
                {description}
              </p>
              <div className="flex justify-center lg:justify-start">
                <div className="flex gap-5 self-start mt-16 text-sm uppercase whitespace-nowrap max-lg:flex-wrap max-lg:mt-10">
                  <Button
                    text={secondaryButtonText}
                    variant="secondary"
                    addClass="grow max-lg:px-5"
                  />
                  <Button
                    text={primaryButtonText}
                    variant="primary"
                    addClass="grow max-lg:px-5"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-lg:ml-0 max-lg:w-full">
            <div className="flex flex-col justify-center max-lg:mt-10 max-lg:max-w-full">
              <Image
                src={image}
                alt={title}
                className="w-full aspect-[1.49] max-lg:max-w-full"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
