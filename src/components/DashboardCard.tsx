// src/components/DashboardCard.tsx
import React from 'react';

interface DashboardCardProps {
  title: string;
  children: React.ReactNode;
}

export default function DashboardCard({ title, children }: DashboardCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="flex-1">{children}</div>
    </div>
  );
}
