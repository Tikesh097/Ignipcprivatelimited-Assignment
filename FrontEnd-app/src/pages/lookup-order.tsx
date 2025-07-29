import CustomerLookup from '../components/CustomerLookup';

export default function LookupOrder() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-8 bg-gray-50 font-sans">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Lookup Order</h1>
      <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow">
        <CustomerLookup />
      </div>
    </main>
  );
}
