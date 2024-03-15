type Props = {
  text: string
  variant: string
  addClass: string
}

export default function Button({ text, variant, addClass }: Props) {
  if (variant === "primary") {
    return (
      <button
        className={`${addClass} justify-center px-10 py-4 font-bold leading-6 uppercase bg-emerald-400 rounded-lg text-blue-950 hover:bg-emerald-500 hover:border-emerald-600 hover:border-solid`}
      >
        {text}
      </button>
    )
  }

  if (variant === "secondary") {
    return (
      <button
        className={`${addClass} justify-center px-10 py-4 font-bold leading-6 text-emerald-500 uppercase bg-white rounded-lg border border-indigo-50 border-solid shadow-sm hover:bg-indigo-50 hover:text-blue-950`}
      >
        {text}
      </button>
    )
  }

  if (variant === "active") {
    return (
      <button
        className={`${addClass} justify-center px-10 py-4 font-bold leading-6 text-white uppercase bg-blue-600 rounded-lg border border-blue-600 border-solid shadow-sm max-md:px-5`}
      >
        {text}
      </button>
    )
  }
}
