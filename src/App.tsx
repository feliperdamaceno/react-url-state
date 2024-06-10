import { useURLState } from './hooks'

export default function App() {
  const [firstName, updateFirstName] = useURLState('first_name')
  const [lastName, updateLastName] = useURLState('last_name')
  const [age, updateAge] = useURLState('age')
  const [color, updateColor] = useURLState('color')

  return (
    <main className="grid flex-1 place-items-center">
      <section className="grid w-full max-w-sm gap-8 p-8 bg-white rounded-md shadow-md">
        <h1 className="text-xl font-semibold text-center" style={{ color }}>
          Welcome Back {firstName} {lastName}
        </h1>

        <div className="grid gap-4">
          <label>
            <span className="block mb-2 text-sm font-medium">First Name</span>
            <input
              type="text"
              placeholder="Your first name..."
              className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              onChange={(e) => updateFirstName(e.target.value)}
              value={firstName}
            />
          </label>

          <label>
            <span className="block mb-2 text-sm font-medium text-gray-700">
              Last Name
            </span>
            <input
              type="text"
              placeholder="Your last name..."
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              onChange={(e) => updateLastName(e.target.value)}
              value={lastName}
            />
          </label>

          <label>
            <span className="block mb-2 text-sm font-medium text-gray-700">
              Age
            </span>
            <input
              type="number"
              placeholder="Your age..."
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              onChange={(e) => updateAge(e.target.value)}
              value={age}
            />
          </label>

          <label>
            <span className="block mb-2 text-sm font-medium text-gray-700">
              Title Color
            </span>
            <input
              type="color"
              className="w-full h-10 bg-transparent cursor-pointer"
              onChange={(e) => updateColor(e.target.value)}
              value={color}
            />
          </label>
        </div>
      </section>
    </main>
  )
}
