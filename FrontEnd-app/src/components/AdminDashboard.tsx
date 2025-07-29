import { useEffect, useState } from 'react';
import api from '../api/api';

type RecentOrder = {
  id: number;
  customer: string;
  amount: number;
  status: string;
};

type AdminData = {
  totalOrders: number;
  pendingOrders: number;
  completedOrders: number;
  revenue: number;
  recentOrders: RecentOrder[];
};

type AdminDashboardProps = {
  adminData: AdminData;
};

export default function AdminDashboard({ adminData }: AdminDashboardProps) {
  return (
    <div className="space-y-4">
      <p>Total Orders: {adminData.totalOrders}</p>
      <p>Pending Orders: {adminData.pendingOrders}</p>
      <p>Completed Orders: {adminData.completedOrders}</p>
      <p>Revenue: ${adminData.revenue}</p>

      <h3 className="text-xl font-bold mt-4">Recent Orders</h3>
      <ul>
        {adminData.recentOrders.map((order) => (
          <li key={order.id}>
            #{order.id} | {order.customer} | ${order.amount} | {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
