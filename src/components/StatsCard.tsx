// src/components/BankRatingCard.tsx
import React from 'react';

interface BankRatingCardProps {
  bank: {
    name: string;
    logo?: string;
    overallScore: number;
  };
}

export default function BankRatingCard({ bank }: BankRatingCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-gray-100 rounded-full mb-4 flex items-center justify-center text-gray-400">
        {bank.logo ? (
          <img src={bank.logo} alt={bank.name} className="w-12 h-12 object-contain" />
        ) : (
          <span className="text-2xl">🏦</span>
        )}
      </div>
      <h4 className="font-semibold">{bank.name}</h4>
      <p className="text-3xl font-bold text-green-600">{bank.overallScore}</p>
      <p className="text-sm text-gray-500">ESG Score</p>
    </div>
  );
}
