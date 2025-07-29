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
        <Route path="/" element={<Home />} />
        <Route path="/create-order" element={<CreateOrder />} />
        <Route path="/lookup-order" element={<LookupOrder />} />
        <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}
