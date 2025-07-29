import { useState } from 'react';
import api from '../api/api';

// ✅ 1️⃣ Define props type
type OrderFormProps = {
  orderData: {
    customerName: string;
    product: string;
    quantity: number;
    address: string;
  };
};

// ✅ 2️⃣ Accept props in function signature
export default function OrderForm({ orderData }: OrderFormProps) {
  const [customerId, setCustomerId] = useState(orderData.customerName || '');
  const [productId, setProductId] = useState(orderData.product || '');
  const [quantity, setQuantity] = useState(orderData.quantity || 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post('/orders', {
        customerId,
        items: [{ productId, quantity }],
        paymentStatus: 'PAID',
      });
      console.log(res.data);
      alert('Order created!');
      setCustomerId('');
      setProductId('');
      setQuantity(1);
    } catch (err) {
      console.error(err);
      alert('Error creating order.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 flex flex-col"
    >
      <input
        type="text"
        placeholder="Customer ID"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
        required
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        required
        className="border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        required
        min={1}
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Create Order
      </button>
    </form>
  );
}
