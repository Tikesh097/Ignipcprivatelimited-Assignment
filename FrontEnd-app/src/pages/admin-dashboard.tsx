import AdminDashboard from '../components/AdminDashboard';

export default function AdminDashboardPage() {
  const tempAdminData = {
    totalOrders: 120,
    pendingOrders: 15,
    completedOrders: 100,
    revenue: 25000,
    recentOrders: [
      { id: 1, customer: "Alice", amount: 500, status: "Completed" },
      { id: 2, customer: "Bob", amount: 750, status: "Pending" },
    ],
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-8 font-sans bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Admin Dashboard</h1>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow p-6">
        <AdminDashboard adminData={tempAdminData} />
      </div>
    </main>
  );
}
