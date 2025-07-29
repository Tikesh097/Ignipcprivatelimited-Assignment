import { useEffect, useState } from 'react';
import api from '../api/api';

export default function AdminDashboard() {
    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        const res = await api.get('/orders');
        setOrders(res.data);
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div>
            <h2>All Orders</h2>
            <ul>
                {orders.map((order: any) => (
                    <li key={order._id}>
                        ID: {order._id} | Status: {order.status} | Customer: {order.customerId}
                    </li>
                ))}
            </ul>
        </div>
    );
}