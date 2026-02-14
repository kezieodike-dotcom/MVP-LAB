
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import InvestmentPortal from './pages/InvestmentPortal';
import Wallet from './pages/Wallet';
import Marketplace from './pages/Marketplace';
import CreatorEconomy from './pages/CreatorEconomy';
import Academy from './pages/Academy';
import AdminPanel from './pages/AdminPanel';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/invest" element={<InvestmentPortal />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/creator" element={<CreatorEconomy />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
