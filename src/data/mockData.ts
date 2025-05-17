// src/data/mockData.ts

export interface BankProfile {
  name: string;
  overallScore: number;            // 0–100
  scope1: number;                  // kt CO₂e
  scope2: number;                  // kt CO₂e
  scope3: number;                  // kt CO₂e
  renewableInvestment: number;     // % of energy portfolio
  frameworkCompliance: number;     // % average across frameworks
  financedEmissions: number;       // kt CO₂e (Scope 3 Category 15)
  yoyChange: number;               // % year-over-year change in total emissions
}

export const bankProfiles: BankProfile[] = [
  {
    name: 'HSBC Holdings PLC',
    overallScore: 82,
    scope1: 150,
    scope2: 300,
    scope3: 2500,
    renewableInvestment: 45,
    frameworkCompliance: 80,
    financedEmissions: 2500,
    yoyChange: -8,
  },
  {
    name: 'Sberbank Rossii PAO',
    overallScore:  sixty⭐,
    scope1: 180,
    scope2: 400,
    scope3: 3000,
    renewableInvestment: 30,
    frameworkCompliance: 70,
    financedEmissions: 3000,
    yoyChange: +5,
  },
  {
    name: 'Banco Santander SA',
    overallScore: 78,
    scope1: 130,
    scope2: 280,
    scope3: 2200,
    renewableInvestment: 38,
    frameworkCompliance: 75,
    financedEmissions: 2200,
    yoyChange: -10,
  },
  {
    name: 'BNP Paribas SA',
    overallScore: 80,
    scope1: 140,
    scope2: 310,
    scope3: 2400,
    renewableInvestment: 42,
    frameworkCompliance: 78,
    financedEmissions: 2400,
    yoyChange: -7,
  },
  {
    name: 'Societe Generale SA',
    overallScore: 76,
    scope1: 120,
    scope2: 260,
    scope3: 2100,
    renewableInvestment: 36,
    frameworkCompliance: 74,
    financedEmissions: 2100,
    yoyChange: -12,
  },
  {
    name: 'Banco Bilbao Vizcaya Argentaria SA',
    overallScore: 75,
    scope1: 110,
    scope2: 240,
    scope3: 2000,
    renewableInvestment: 35,
    frameworkCompliance: 73,
    financedEmissions: 2000,
    yoyChange: -9,
  },
  {
    name: 'UBS Group AG',
    overallScore: 84,
    scope1: 100,
    scope2: 220,
    scope3: 2300,
    renewableInvestment: 48,
    frameworkCompliance: 82,
    financedEmissions: 2300,
    yoyChange: -6,
  },
  {
    name: 'Intesa Sanpaolo SpA',
    overallScore: 77,
    scope1: 115,
    scope2: 250,
    scope3: 2150,
    renewableInvestment: 37,
    frameworkCompliance: 76,
    financedEmissions: 2150,
    yoyChange: -11,
  },
  {
    name: 'Barclays PLC',
    overallScore: 79,
    scope1: 125,
    scope2: 270,
    scope3: 2250,
    renewableInvestment: 39,
    frameworkCompliance: 77,
    financedEmissions: 2250,
    yoyChange: -10,
  },
  {
    name: 'Deutsche Bank AG',
    overallScore: 81,
    scope1: 135,
    scope2: 290,
    scope3: 2350,
    renewableInvestment: 41,
    frameworkCompliance: 79,
    financedEmissions: 2350,
    yoyChange: -8,
  },
  {
    name: 'Standard Chartered PLC',
    overallScore: 74,
    scope1: 145,
    scope2: 320,
    scope3: 2450,
    renewableInvestment: 34,
    frameworkCompliance: 72,
    financedEmissions: 2450,
    yoyChange: +2,
  },
  {
    name: 'Credit Agricole SA',
    overallScore: 78,
    scope1: 128,
    scope2: 265,
    scope3: 2180,
    renewableInvestment: 38,
    frameworkCompliance: 75,
    financedEmissions: 2180,
    yoyChange: -9,
  },
  {
    name: 'UniCredit SpA',
    overallScore: 76,
    scope1: 118,
    scope2: 255,
    scope3: 2120,
    renewableInvestment: 36,
    frameworkCompliance: 74,
    financedEmissions: 2120,
    yoyChange: -11,
  },
  {
    name: 'Haci Ömer Sabancı Holding AS',
    overallScore: 70,
    scope1: 160,
    scope2: 340,
    scope3: 2900,
    renewableInvestment: 28,
    frameworkCompliance: 68,
    financedEmissions: 2900,
    yoyChange: +4,
  },
  {
    name: 'Lloyds Banking Group PLC',
    overallScore: 77,
    scope1: 122,
    scope2: 260,
    scope3: 2150,
    renewableInvestment: 37,
    frameworkCompliance: 76,
    financedEmissions: 2150,
    yoyChange: -10,
  },
  {
    name: 'ING Groep NV',
    overallScore: 83,
    scope1: 105,
    scope2: 230,
    scope3: 2280,
    renewableInvestment: 46,
    frameworkCompliance: 81,
    financedEmissions: 2280,
    yoyChange: -7,
  },
  {
    name: 'NatWest Group PLC',
    overallScore: 75,
    scope1: 130,
    scope2: 275,
    scope3: 2200,
    renewableInvestment: 35,
    frameworkCompliance: 74,
    financedEmissions: 2200,
    yoyChange: -12,
  },
  {
    name: 'CaixaBank SA',
    overallScore: 74,
    scope1: 115,
    scope2: 245,
    scope3: 2100,
    renewableInvestment: 34,
    frameworkCompliance: 73,
    financedEmissions: 2100,
    yoyChange: -13,
  },
  {
    name: 'Erste Group Bank AG',
    overallScore: 72,
    scope1: 125,
    scope2: 260,
    scope3: 2200,
    renewableInvestment: 32,
    frameworkCompliance: 71,
    financedEmissions: 2200,
    yoyChange: -14,
  },
  {
    name: 'Raiffeisen Bank International AG',
    overallScore: 73,
    scope1: 130,
    scope2: 270,
    scope3: 2250,
    renewableInvestment: 33,
    frameworkCompliance: 72,
    financedEmissions: 2250,
    yoyChange: -12,
  },
  {
    name: 'OTP Bank Nyrt',
    overallScore: 71,
    scope1: 140,
    scope2: 285,
    scope3: 2350,
    renewableInvestment: 31,
    frameworkCompliance: 70,
    financedEmissions: 2350,
    yoyChange: -11,
  },
];

// For chart components, you can derive specific arrays:
export const bankRankingData = bankProfiles.map(b => ({
  name: b.name,
  score: b.overallScore
}));

export const emissionsChartData = bankProfiles.map(b => ({
  name: b.name,
  scope1: b.scope1,
  scope2: b.scope2,
  scope3: b.scope3
}));

export const renewableInvestmentData = bankProfiles.map(b => ({
  name: b.name,
  value: b.renewableInvestment
}));

export const frameworkComplianceData = bankProfiles.map(b => ({
  framework: b.name,
  compliance: b.frameworkCompliance
}));

export const financedEmissionsData = bankProfiles.map(b => ({
  name: b.name,
  value: b.financedEmissions
}));
