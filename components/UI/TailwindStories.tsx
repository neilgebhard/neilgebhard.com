export default function TailwindStories() {
  return (
    <div className="m-10 text-gray-50">
      <p className="text-xl font-semibold uppercase tracking-wide text-fuchsia-400">
        Introducing...
      </p>
      <h1 className="mt-4 text-6xl font-semibold tracking-tight">
        Tailwind Stories.
      </h1>
      <ul className="mt-10 flex gap-4">
        <li className="flex flex-col items-center space-y-3">
          <div className="relative block rounded-full bg-gradient-to-tr from-pink-500 to-blue-500 p-1">
            <a
              className="block -rotate-6 rounded-full bg-white p-1 transition hover:rotate-0"
              href="#"
            >
              <img
                className="rounded-full"
                src="https://placekitten.com/200/201"
                alt="kitten"
              />
            </a>
            <button className="absolute right-3 bottom-2 grid h-8 w-8 place-items-center rounded-full bg-blue-500 font-mono text-2xl font-semibold ring-4 ring-white hover:bg-blue-700">
              +
            </button>
          </div>
          <div className="text-xl">kitty_one</div>
        </li>
        <li className="flex flex-col items-center space-y-3">
          <div className="block rounded-full bg-gradient-to-tr from-pink-500 to-blue-500 p-1">
            <a
              className="block -rotate-6 rounded-full bg-white p-1 transition hover:rotate-0"
              href="#"
            >
              <img
                className="rounded-full"
                src="https://placekitten.com/200/202"
                alt="kitten"
              />
            </a>
          </div>
          <div className="text-xl">meowwwww123</div>
        </li>
        <li className="flex flex-col items-center space-y-3">
          <div className="block rounded-full bg-gradient-to-tr from-pink-500 to-blue-500 p-1">
            <a
              className="block -rotate-6 rounded-full bg-white p-1 transition hover:rotate-0"
              href="#"
            >
              <img
                className="rounded-full"
                src="https://placekitten.com/200/203"
                alt="kitten"
              />
            </a>
          </div>
          <div className="text-xl">puffy_cat987</div>
        </li>
        <li className="flex flex-col items-center space-y-3">
          <div className="block rounded-full bg-gradient-to-tr from-pink-500 to-blue-500 p-1">
            <a
              className="block -rotate-6 rounded-full bg-white p-1 transition hover:rotate-0"
              href="#"
            >
              <img
                className="rounded-full"
                src="https://placekitten.com/200/200"
                alt="kitten"
              />
            </a>
          </div>
          <div className="text-xl">orangeEars_12</div>
        </li>
      </ul>
    </div>
  )
}
