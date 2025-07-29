import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages';
import CreateOrder from './pages/create-order';
import LookupOrder from './pages/lookup-order';
import AdminDashboardPage from './pages/admin-dashboard';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Create Order Page with temp data inside CreateOrder */}
        <Route path="/create-order" element={<CreateOrder />} />

        {/* Lookup Order Page with temp data inside LookupOrder */}
        <Route path="/lookup-order" element={<LookupOrder />} />

        {/* Admin Dashboard Page with temp data inside AdminDashboardPage */}
        <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}
