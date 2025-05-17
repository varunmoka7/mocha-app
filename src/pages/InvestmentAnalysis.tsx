import { useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { motion } from 'framer-motion';
import DashboardCard from '../components/DashboardCard';

// Mock data for investment analysis
const investmentTrends = [
  { year: 2018, fossil: 320, renewable: 150, sustainable: 90 },
  { year: 2019, fossil: 300, renewable: 180, sustainable: 110 },
  { year: 2020, fossil: 280, renewable: 230, sustainable: 140 },
  { year: 2021, fossil: 250, renewable: 280, sustainable: 180 },
  { year: 2022, fossil: 210, renewable: 320, sustainable: 220 },
  { year: 2023, fossil: 180, renewable: 380, sustainable: 250 },
];

const sectorBreakdown = [
  { name: 'Oil & Gas', value: 120 },
  { name: 'Coal', value: 60 },
  { name: 'Solar', value: 150 },
  { name: 'Wind', value: 130 },
  { name: 'Hydro', value: 100 },
  { name: 'Green Buildings', value: 110 },
  { name: 'Sustainable Agriculture', value: 70 },
  { name: 'Clean Transportation', value: 70 },
];

const COLORS = {
  oil: '#ff9f7f',
  coal: '#E57373',
  solar: '#81C784',
  wind: '#64B5F6',
  hydro: '#4DB6AC',
  buildings: '#AED581',
  agriculture: '#FFD54F',
  transportation: '#7986CB',
};

export default function InvestmentAnalysis() {
  const [selectedBank, setSelectedBank] = useState('Green Finance Bank');
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Investment Analysis</h1>
        <div className="flex items-center gap-3">
          <select 
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="Green Finance Bank">Green Finance Bank</option>
            <option value="Sustainable United">Sustainable United</option>
            <option value="Global ESG Bank">Global ESG Bank</option>
          </select>
          <button className="btn-primary">View Details</button>
        </div>
      </div>
      
      <DashboardCard title="Investment Trends Over Time">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart
            data={investmentTrends}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip formatter={(value) => `$${value}M`} />
            <Legend />
            <Line type="monotone" dataKey="fossil" stroke="#ff7c43" name="Fossil Fuel Investments" />
            <Line type="monotone" dataKey="renewable" stroke="#4ecdc4" name="Renewable Energy Investments" />
            <Line type="monotone" dataKey="sustainable" stroke="#1a535c" name="Sustainable Infrastructure" />
          </LineChart>
        </ResponsiveContainer>
      </DashboardCard>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardCard title="Investment by Sector">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              data={sectorBreakdown}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip formatter={(value) => `$${value}M`} />
              <Legend />
              <Bar dataKey="value" fill="#8884d8">
                {sectorBreakdown.map((entry, index) => {
                  let color;
                  if (entry.name === 'Oil & Gas') color = COLORS.oil;
                  else if (entry.name === 'Coal') color = COLORS.coal;
                  else if (entry.name === 'Solar') color = COLORS.solar;
                  else if (entry.name === 'Wind') color = COLORS.wind;
                  else if (entry.name === 'Hydro') color = COLORS.hydro;
                  else if (entry.name === 'Green Buildings') color = COLORS.buildings;
                  else if (entry.name === 'Sustainable Agriculture') color = COLORS.agriculture;
                  else color = COLORS.transportation;
                  
                  return <Cell key={`cell-${index}`} fill={color} />;
                })}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </DashboardCard
