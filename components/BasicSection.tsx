import Image from "next/image"
import Button from "./Button"

interface Props {
  title: string
  description: string
  buttonText: string
  image: string
}

export default function BasicSection({
  title,
  description,
  image,
  buttonText,
}: Props) {
  return (
    <div className="flex justify-center">
      <div className="mt-8 lg:mt-28 w-full max-w-[1408px] max-lg:max-w-full">
        <div className="flex gap-5 max-lg:flex-col max-lg:gap-0">
          <div className="flex flex-col w-6/12 max-lg:ml-0 max-lg:w-full">
            <div className="flex flex-col items-center lg:items-start px-5 2xl:px-0 2xl:pr-10 font-bold text-blue-950 max-lg:max-w-full">
              <h2 className="text-center lg:text-left text-3xl max-lg:max-w-full">
                {title}
              </h2>
              <p className="mt-4 text-center lg:text-left text-base font-medium leading-6 max-lg:max-w-full">
                {description}
              </p>
              <div>
                <Button
                  text={buttonText}
                  variant="primary"
                  addClass="mt-16 max-lg:px-5 max-lg:mt-10 text-sm"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-lg:ml-0 max-lg:w-full">
            <div className="flex flex-col grow justify-center max-lg:mt-10 max-lg:max-w-full">
              <Image
                src={image}
                alt={title}
                width={1408}
                height={943}
                className="w-full aspect-[1.49] max-lg:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
