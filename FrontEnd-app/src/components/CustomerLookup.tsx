import { useState } from 'react';
import api from '../api/api';
type CustomerData = {
  customerId: string;
  customerName: string;
  email: string;
  phone: string;
};

type CustomerLookupProps = {
  customerData: CustomerData;
};

export default function CustomerLookup({ customerData }: CustomerLookupProps) {
  const [orderId, setOrderId] = useState('');
  const [order, setOrder] = useState<any | null>(null);

  const handleLookup = async () => {
    try {
      const res = await api.get(`/orders/${orderId}`);
      setOrder(res.data);
    } catch (err) {
      console.error(err);
      alert('Order not found');
    }
  };

  return (
    <div>
      <div className="mb-4">
        <h3 className="font-bold mb-2">Customer Info</h3>
        <p>ID: {customerData.customerId}</p>
        <p>Name: {customerData.customerName}</p>
        <p>Email: {customerData.email}</p>
        <p>Phone: {customerData.phone}</p>
      </div>

      <input
        placeholder="Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <button onClick={handleLookup}>Lookup</button>

      {order && (
        <div>
          <h3>Status: {order.status}</h3>
          <pre>{JSON.stringify(order, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}