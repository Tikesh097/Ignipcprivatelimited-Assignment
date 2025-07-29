import OrderForm from '../components/OrderForm';

export default function CreateOrder() {
  const tempOrderData = {
    customerName: "John Doe",
    product: "Sample Product",
    quantity: 2,
    address: "123 Main Street, City",
  };

  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-8 bg-gray-50 font-sans">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Create Order</h1>
      <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow">
        <OrderForm orderData={tempOrderData} />
      </div>
    </main>
  );
}
