import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import EmissionsTracker from './pages/EmissionsTracker';
import InvestmentAnalysis from './pages/InvestmentAnalysis';
import FrameworkCompliance from './pages/FrameworkCompliance';
import BankComparison from './pages/BankComparison';
import Layout from './components/Layout';
import './index.css';

export default function App() {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="emissions" element={<EmissionsTracker />} />
          <Route path="investments" element={<InvestmentAnalysis />} />
          <Route path="frameworks" element={<FrameworkCompliance />} />
          <Route path="comparison" element={<BankComparison />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
