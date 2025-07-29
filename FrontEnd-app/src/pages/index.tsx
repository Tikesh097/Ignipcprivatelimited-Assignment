export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen font-sans">
      <h1 className="text-5xl font-bold mb-8 text-red-500">OMS Frontend</h1>
      <ul className="space-y-4">
        <li>
          <a
            href="/create-order"
            className="text-blue-600 hover:text-blue-800 hover:underline transition"
          >
            Create Order
          </a>
        </li>
        <li>
          <a
            href="/lookup-order"
            className="text-blue-600 hover:text-blue-800 hover:underline transition"
          >
            Lookup Order
          </a>
        </li>
        <li>
          <a
            href="/admin-dashboard"
            className="text-blue-600 hover:text-blue-800 hover:underline transition"
          >
            Admin Dashboard
          </a>
        </li>
      </ul>
    </main>
  );
}
