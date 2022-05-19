export default function Card() {
  return (
    <div className="grid min-h-screen place-items-center bg-white">
      <div className="max-w-xs">
        <img
          className="w-full rounded-lg shadow-lg"
          src="https://placekitten.com/400/250"
          alt="kitten"
        />
        <h1 className="mt-6 text-xl font-bold text-gray-900">
          You can work from anywhere.{' '}
          <span className="text-indigo-500">Take advantage of it.</span>
        </h1>
        <p className="mt-2 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          inventore consectetur! Voluptatibus ipsum similique culpa saepe,{' '}
        </p>
        <div className="mt-4">
          <a
            className="inline-block rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold uppercase tracking-wider shadow-md hover:bg-indigo-600"
            href="#"
          >
            Book your escape
          </a>
        </div>
      </div>
    </div>
  )
}
