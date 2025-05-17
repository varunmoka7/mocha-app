import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { motion } from 'framer-motion';
import DashboardCard from '../components/DashboardCard';
import { emissionsData, scope3ByCategory } from '../data/mockData';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#ff7300'];

export default function EmissionsTracker() {
  const [selectedBank, setSelectedBank] = useState('Green Finance Bank');
  
  // Convert emissions data for bar chart
  const barData = emissionsData.map(year => ({
    year: year.year,
    'Scope 1': year.scope1,
    'Scope 2': year.scope2,
    'Scope 3': year.scope3,
  }));
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Emissions Tracker</h1>
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
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardCard title="Emissions by Scope (tons CO2e)">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              data={barData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Scope 1" stackId="a" fill="#8884d8" />
              <Bar dataKey="Scope 2" stackId="a" fill="#82ca9d" />
              <Bar dataKey="Scope 3" stackId="a" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </DashboardCard>
        
        <DashboardCard title="Scope 3 Emissions by Category">
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={scope3ByCategory}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {scope3ByCategory.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value} tons CO2e`} />
            </PieChart>
          </ResponsiveContainer>
        </DashboardCard>
      </div>
      
      <DashboardCard title="Financed Emissions (Category 15)">
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Understanding Financed Emissions</h3>
          <p className="text-gray-600">
            Financed emissions (Scope 3, Category 15) represent the emissions associated with a financial institution's loans and investments. These typically account for over 70% of a bank's carbon footprint and are critical to addressing climate change in the financial sector.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 rounded-lg p-4">
            <h4 className="text-md font-semibold mb-2 text-green-700">Fossil Fuel Financing</h4>
            <div className="text-2xl font-bold text-gray-800 mb-1">$245M</div>
            <div className="text-sm text-gray-600">Down 18% year-over-year</div>
            <div className="mt-3 text-xs text-green-600 font-medium">REDUCTION TARGET: 25% by 2025</div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="text-md font-semibold mb-2 text-blue-700">High-Carbon Sectors</h4>
            <div className="text-2xl font-bold text-gray-800 mb-1">$480M</div>
            <div className="text-sm text-gray-600">28% of total portfolio</div>
            <div className="mt-3 text-xs text-blue-600 font-medium">REDUCTION TARGET: 30% by 2030</div>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-4">
            <h4 className="text-md font-semibold mb-2 text-purple-700">Emission Intensity</h4>
            <div className="text-2xl font-bold text-gray-800 mb-1">86 tCO2e/$M</div>
            <div className="text-sm text-gray-600">Down 12% from baseline</div>
            <div className="mt-3 text-xs text-purple-600 font-medium">TARGET: 50 tCO2e/$M by 2030</div>
          </div>
        </div>
      </DashboardCard>
    </motion.div>
  );
}
