export default function Card() {
  return (
    <div className="bg-white min-h-screen grid place-items-center">
      <div className="max-w-xs shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full"
          src="https://placekitten.com/400/250"
          alt="kitten"
        />
        <div className="p-4">
          <h1 className="text-gray-900 text-xl font-bold">
            You can work from anywhere.{' '}
            <span className="text-indigo-500">Take advantage of it.</span>
          </h1>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            inventore consectetur! Voluptatibus ipsum similique culpa saepe,{' '}
          </p>
          <div className="mt-4">
            <a
              className="bg-indigo-500 text-sm px-5 py-3 rounded-lg uppercase font-semibold tracking-wider inline-block hover:bg-indigo-600"
              href="#"
            >
              Book your escape
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
