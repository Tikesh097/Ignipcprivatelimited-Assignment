import AdminDashboard from '../components/AdminDashboard';

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-8 font-sans bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Admin Dashboard</h1>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow p-6">
        <AdminDashboard />
      </div>
    </main>
  );
}
