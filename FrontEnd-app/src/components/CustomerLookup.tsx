import { useState } from 'react';
import api from '../api/api';

export default function CustomerLookup() {
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
