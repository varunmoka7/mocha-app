import { useState } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { motion } from 'framer-motion';
import { Squircle, CircleCheck, FileCheck } from 'lucide-react';
import DashboardCard from '../components/DashboardCard';
import { frameworkCompliance } from '../data/mockData';

// Mock data for framework details
const frameworkDetails = [
  {
    name: 'TCFD',
    description: 'Task Force on Climate-related Financial Disclosures',
    categories: [
      { name: 'Governance', score: 90, status: 'Compliant' },
      { name: 'Strategy', score: 85, status: 'Compliant' },
      { name: 'Risk Management', score: 80, status: 'Compliant' },
      { name: 'Metrics & Targets', score: 85, status: 'Compliant' },
    ],
    lastUpdate: '2023-06-15',
  },
  {
    name: 'PCAF',
    description: 'Partnership for Carbon Accounting Financials',
    categories: [
      { name: 'Listed Equity', score: 85, status: 'Compliant' },
      { name: 'Business Loans', score: 75, status: 'Compliant' },
      { name: 'Project Finance', score: 80, status: 'Compliant' },
      { name: 'Mortgages', score: 70, status: 'Partial' },
      { name: 'Commercial Real Estate', score: 80, status: 'Compliant' },
    ],
    lastUpdate: '2023-05-22',
  },
  {
    name: 'SBTi',
    description: 'Science Based Targets initiative',
    categories: [
      { name: 'Target Ambition', score: 75, status: 'Compliant' },
      { name: 'Target Timeframe', score: 80, status: 'Compliant' },
      { name: 'Scope Coverage', score: 70, status: 'Partial' },
      { name: 'Reporting', score: 65, status: 'Partial' },
    ],
    lastUpdate: '2023-07-10',
  },
];

export default function FrameworkCompliance() {
  const [selectedBank, setSelectedBank] = useState('Green Finance Bank');
  const [selectedFramework, setSelectedFramework] = useState('TCFD');
  
  const currentFramework = frameworkDetails.find(f => f.name === selectedFramework);
  
  const getStatusIcon = (status: string) => {
    if (status === 'Compliant') return <CircleCheck size={16} className="text-green-500" />;
    if (status === 'Partial') return <Squircle size={16} className="text-yellow-500" />;
    return <Squircle size={16} className="text-red-500" />;
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Framework Compliance</h1>
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
          <button className="btn-secondary flex items-center gap-1">
            <FileCheck size={16} />
            <span>View Report</span>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardCard title="Overall Framework Compliance">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              data={frameworkCompliance}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="framework" />
              <YAxis domain={[0, 100]} />
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend />
              <Bar dataKey="compliance" name="Compliance Score" fill="#4ecdc4" />
            </BarChart>
          </ResponsiveContainer>
        </DashboardCard>
        
        <DashboardCard title="Framework Categories Compliance">
          <div className="mb-4 flex justify-center">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              {frameworkDetails.map((framework) => (
                <button
                  key={framework.name}
                  type="button"
                  className={`px-4 py-2 text-sm font-medium border ${
                    selectedFramework === framework.name 
                      ? 'bg-green-500 text-white border-green-500' 
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                  } ${framework.name === 'TCFD' ? 'rounded-l-lg' : framework.name === 'SBTi' ? 'rounded-r-lg' : ''}`}
                  onClick={() => setSelectedFramework(framework.name)}
                >
                  {framework.name}
                </button>
              ))}
            </div>
          </div>
          
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={currentFramework?.categories}>
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar name="Score" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Tooltip formatter={(value) => `${value}%`} />
            </RadarChart>
          </ResponsiveContainer>
        </DashboardCard>
      </div>
      
      <DashboardCard title={`${selectedFramework} Detailed Compliance`}>
        <div className="mb-4">
          <h3 className="text-lg text-gray-700">{currentFramework?.description}</h3>
          <p className="text-sm text-gray-500">Last updated: {currentFramework?.lastUpdate}</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentFramework?.categories.map((category, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{category.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.score}%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      {getStatusIcon(category.status)}
                      <span>{category.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${
                          category.score >= 80 ? 'bg-green-500' : 
                          category.score >= 60 ? 'bg-yellow-400' : 'bg-orange-500'
                        }`} 
                        style={{ width: `${category.score}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DashboardCard>
    </motion.div>
}
