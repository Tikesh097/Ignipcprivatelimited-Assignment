import { useState } from 'react';
import api from '../api/api';

export default function OrderForm() {
  const [customerId, setCustomerId] = useState('');
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post('/orders', {
        customerId,
        items: [{ productId, quantity }],
        paymentStatus: 'PAID'
      });
      console.log(res.data);
      alert('Order created!');
    } catch (err) {
      console.error(err);
      alert('Error creating order.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Customer ID"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
      />
      <input
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button type="submit">Create Order</button>
    </form>
  );
}
