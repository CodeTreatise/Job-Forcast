import React from 'react';
import { Coins, Globe2, Scale } from 'lucide-react';
import { SUPPORTED_CURRENCIES, CurrencyRate } from '../data/currencyData';

interface CurrencySelectorProps {
  selectedCurrency: string;
  onSelectCurrency: (code: string) => void;
  isPPPEnabled: boolean;
  onTogglePPP: () => void;
}

export const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  selectedCurrency,
  onSelectCurrency,
  isPPPEnabled,
  onTogglePPP,
}) => {
  const current = SUPPORTED_CURRENCIES[selectedCurrency] || SUPPORTED_CURRENCIES.USD;

  return (
    <div className="flex items-center gap-2">
      {/* PPP Toggle Button */}
      <button
        onClick={onTogglePPP}
        className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
          isPPPEnabled
            ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-sm'
            : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
        }`}
        title="Toggle Purchasing Power Parity (PPP) adjusted standard of living equivalence"
      >
        <Scale className="w-3.5 h-3.5 text-amber-400" />
        <span className="hidden sm:inline">PPP Mode:</span>
        <span className="font-bold">{isPPPEnabled ? 'ON' : 'OFF'}</span>
      </button>

      {/* Currency Selector Dropdown */}
      <div className="relative inline-flex items-center">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 hover:border-slate-700 transition-all">
          <Coins className="w-3.5 h-3.5 text-sky-400" />
          <select
            value={selectedCurrency}
            onChange={(e) => onSelectCurrency(e.target.value)}
            className="bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer pr-1"
          >
            {Object.values(SUPPORTED_CURRENCIES).map((curr) => (
              <option key={curr.code} value={curr.code} className="bg-slate-950 text-white">
                {curr.symbol} {curr.code} — {curr.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
