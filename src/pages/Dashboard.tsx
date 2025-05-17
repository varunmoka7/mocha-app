import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { motion } from 'framer-motion';
import { ChartBar, Droplets, FileCheck, Leaf } from 'lucide-react';
import DashboardCard from '../components/DashboardCard';
import StatsCard from '../components/StatsCard';
import BankRatingCard from '../components/BankRatingCard';
import { topBanks, emissionsData, investmentBreakdown, frameworkCompliance } from '../data/mockData';

const COLORS = ['#ff7c43', '#4ecdc4', '#1a535c', '#4caf50'];

export default function Dashboard() {
  const [selectedYear, setSelectedYear] = useState('2023');
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">ESG Banking Performance Dashboard</h1>
        <div className="flex items-center gap-3">
          <select 
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
          <button className="btn-primary">Export Report</button>
        </div>
      </div>
      
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          title="Total Emissions Tracked"
          value="2,110 CO2e"
          change={-12}
          icon={<ChartBar size={18} className="text-green-700" />}
        />
        <StatsCard 
          title="Financed Emissions"
          value="1,800 CO2e"
          change={-15}
          icon={<Droplets size={18} className="text-blue-700" />}
          iconBg="bg-blue-100"
        />
        <StatsCard 
          title="Renewable Investment"
          value="40%"
          change={8}
          icon={<Leaf size={18} className="text-emerald-700" />}
          iconBg="bg-emerald-100"
        />
        <StatsCard 
          title="Framework Compliance"
          value="78%"
          change={5}
          icon={<FileCheck size={18} className="text-purple-700" />}
          iconBg="bg-purple-100"
        />
      </div>
      
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardCard title="Emissions Over Time">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={emissionsData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="scope1" stroke="#8884d8" name="Scope 1" />
              <Line type="monotone" dataKey="scope2" stroke="#82ca9d" name="Scope 2" />
              <Line type="monotone" dataKey="scope3" stroke="#ff7300" name="Scope 3 (Financed)" />
            </LineChart>
          </ResponsiveContainer>
        </DashboardCard>
        
        <DashboardCard title="Investment Portfolio Breakdown">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={investmentBreakdown}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {investmentBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
        </DashboardCard>
      </div>
      
      {/* Top Banks Row */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Top Performing Banks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topBanks.map((bank, index) => (
            <BankRatingCard key={index} bank={bank} />
          ))}
        </div>
      </div>
    </motion.div>
);
