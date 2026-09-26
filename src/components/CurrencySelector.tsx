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
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
          isPPPEnabled
            ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-sm shadow-amber-500/20'
            : 'bg-slate-800/90 text-slate-200 border-slate-700 hover:text-white hover:bg-slate-700'
        }`}
        title="Toggle Purchasing Power Parity (PPP) adjusted standard of living equivalence"
      >
        <Scale className={`w-3.5 h-3.5 ${isPPPEnabled ? 'text-slate-950 stroke-[2.5]' : 'text-amber-400'}`} />
        <span className="hidden sm:inline">PPP:</span>
        <span>{isPPPEnabled ? 'ON' : 'OFF'}</span>
      </button>

      {/* Currency Selector Dropdown */}
      <div className="relative inline-flex items-center">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/90 border border-slate-700 text-xs text-white hover:border-slate-500 transition-all">
          <Coins className="w-3.5 h-3.5 text-sky-400" />
          <select
            value={selectedCurrency}
            onChange={(e) => onSelectCurrency(e.target.value)}
            className="bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer pr-1"
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
