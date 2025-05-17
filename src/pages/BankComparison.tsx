import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { motion } from 'framer-motion';
import DashboardCard from '../components/DashboardCard';
import { bankRankingData } from '../data/mockData';

// Mock data for bank comparison
const comparisonCategories = [
  { category: 'Emissions Reduction', bank1: 85, bank2: 65 },
  { category: 'Renewable Investments', bank1: 80, bank2: 55 },
  { category: 'Fossil Fuel Reduction', bank1: 75, bank2: 40 },
  { category: 'ESG Transparency', bank1: 90, bank2: 60 },
  { category: 'Climate Risk Management', bank1: 85, bank2: 70 },
  { category: 'Net-Zero Targets', bank1: 95, bank2: 65 },
];

export default function BankComparison() {
  const [bank1, setBank1] = useState('Green Finance Bank');
  const [bank2, setBank2] = useState('Traditional Bank A');
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Bank Comparison Tool</h1>
        <div className="flex items-center gap-3">
          <button className="btn-primary">Export Comparison</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="dashboard-card">
          <h3 className="text-lg font-semibold mb-3">Select Banks to Compare</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bank 1</label>
              <select 
                value={bank1}
                onChange={(e) => setBank1(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="Green Finance Bank">Green Finance Bank</option>
                <option value="Eco Banking Corp">Eco Banking Corp</option>
                <option value="Sustainable United">Sustainable United</option>
                <option value="Global ESG Bank">Global ESG Bank</option>
                <option value="Climate Finance Corp">Climate Finance Corp</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bank 2</label>
              <select 
                value={bank2}
                onChange={(e) => setBank2(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="Traditional Bank A">Traditional Bank A</option>
                <option value="Traditional Bank B">Traditional Bank B</option>
                <option value="Traditional Bank C">Traditional Bank C</option>
                <option value="Global Finance Inc">Global Finance Inc</option>
                <option value="International Banking Group">International Banking Group</option>
              </select>
            </div>
          </div>
        </div>
        
        <DashboardCard title="ESG Performance Radar">
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={comparisonCategories}>
              <PolarGrid />
              <PolarAngleAxis dataKey="category" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar name={bank1} dataKey="bank1" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Radar name={bank2} dataKey="bank2" stroke="#ff7c43" fill="#ff7c43" fillOpacity={0.6} />
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </DashboardCard>
      </div>
      
      <DashboardCard title="Category Comparison">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={comparisonCategories}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 100]} />
            <YAxis type="category" dataKey="category" />
            <Tooltip formatter={(value) => `${value}%`} />
            <Legend />
            <Bar dataKey="bank1" name={bank1} fill="#8884d8" />
            <Bar dataKey="bank2" name={bank2} fill="#ff7c43" />
          </BarChart>
        </ResponsiveContainer>
      </DashboardCard>
      
      <DashboardCard title="Banking Sector ESG Rankings">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={bankRankingData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} />
            <Tooltip formatter={(value) => `${value}/100`} />
            <Legend />
            <Bar dataKey="score" name="ESG Score" fill="#4ecdc4" />
          </BarChart>
        </ResponsiveContainer>
        
        <div className="mt-6 text-center">
          <h3 className="text-lg font-medium text-gray-700 mb-2">
            How to Interpret ESG Scores
          </h3>
          <div className="grid grid-cols-5 gap-2 max-w-lg mx-auto">
            <div className="text-center">
              <div className="w-full h-4 bg-red-500 rounded"></div>
              <p className="text-xs mt-1">0-20</p>
              <p className="text-xs text-gray-500">Poor</p>
            </div>
            <div className="text-center">
              <div className="w-full h-4 bg-orange-500 rounded"></div>
              <p className="text-xs mt-1">21-40</p>
              <p className="text-xs text-gray-500">Below Average</p>
            </div>
            <div className="text-center">
              <div className="w-full h-4 bg-yellow-400 rounded"></div>
              <p className="text-xs mt-1">41-60</p>
              <p className="text-xs text-gray-500">Average</p>
            </div>
            <div className="text-center">
              <div className="w-full h-4 bg-green-400 rounded"></div>
              <p className="text-xs mt-1">61-80</p>
              <p className="text-xs text-gray-500">Good</p>
            </div>
            <div className="text-center">
              <div className="w-full h-4 bg-green-600 rounded"></div>
              <p className="text-xs mt-1">81-100</p>
              <p className="text-xs text-gray-500">Excellent</p>
            </div>
          </div>
        </div>
      </DashboardCard>
    </motion.div>
