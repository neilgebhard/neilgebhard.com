export default function TailwindStories() {
  return (
    <div className="m-10 text-gray-50">
      <p className="text-fuchsia-400 uppercase font-semibold text-xl tracking-wide">
        Introducing...
      </p>
      <h1 className="text-6xl mt-4 font-semibold tracking-tight">
        Tailwind Stories.
      </h1>
      <ul className="flex gap-4 mt-10">
        <li className="flex flex-col items-center space-y-3">
          <div className="relative bg-gradient-to-tr from-pink-500 to-blue-500 p-1 block rounded-full">
            <a
              className="bg-white rounded-full p-1 block -rotate-6 hover:rotate-0 transition"
              href="#"
            >
              <img
                className="rounded-full"
                src="https://placekitten.com/200/201"
                alt="kitten"
              />
            </a>
            <button className="absolute bg-blue-500 text-2xl rounded-full right-3 bottom-2 h-8 w-8 grid place-items-center font-semibold ring-4 ring-white font-mono hover:bg-blue-700">
              +
            </button>
          </div>
          <div className="text-xl">kitty_one</div>
        </li>
        <li className="flex flex-col items-center space-y-3">
          <div className="bg-gradient-to-tr from-pink-500 to-blue-500 p-1 block rounded-full">
            <a
              className="bg-white rounded-full p-1 block -rotate-6 hover:rotate-0 transition"
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
          <div className="bg-gradient-to-tr from-pink-500 to-blue-500 p-1 block rounded-full">
            <a
              className="bg-white rounded-full p-1 block -rotate-6 hover:rotate-0 transition"
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
          <div className="bg-gradient-to-tr from-pink-500 to-blue-500 p-1 block rounded-full">
            <a
              className="bg-white rounded-full p-1 block -rotate-6 hover:rotate-0 transition"
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
