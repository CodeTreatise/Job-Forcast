export interface CurrencyRate {
  code: string;
  symbol: string;
  name: string;
  rateAgainstUSD: number; // 1 USD = X Currency
  pppFactorAgainstUSD: number; // Purchasing power adjustment
  formatAsLakhs?: boolean;
}

export const SUPPORTED_CURRENCIES: Record<string, CurrencyRate> = {
  USD: { code: 'USD', symbol: '$', name: 'US Dollar', rateAgainstUSD: 1.0, pppFactorAgainstUSD: 1.0 },
  EUR: { code: 'EUR', symbol: '€', name: 'Euro (EU)', rateAgainstUSD: 0.92, pppFactorAgainstUSD: 0.95 },
  GBP: { code: 'GBP', symbol: '£', name: 'British Pound', rateAgainstUSD: 0.79, pppFactorAgainstUSD: 0.85 },
  INR: { code: 'INR', symbol: '₹', name: 'Indian Rupee', rateAgainstUSD: 83.5, pppFactorAgainstUSD: 0.28, formatAsLakhs: true },
  CNY: { code: 'CNY', symbol: '¥', name: 'Chinese Yuan (RMB)', rateAgainstUSD: 7.24, pppFactorAgainstUSD: 0.58 },
  JPY: { code: 'JPY', symbol: '¥', name: 'Japanese Yen', rateAgainstUSD: 154.0, pppFactorAgainstUSD: 0.78 },
  CAD: { code: 'CAD', symbol: 'CA$', name: 'Canadian Dollar', rateAgainstUSD: 1.37, pppFactorAgainstUSD: 1.1 },
  AUD: { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', rateAgainstUSD: 1.52, pppFactorAgainstUSD: 1.15 },
  SGD: { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar', rateAgainstUSD: 1.34, pppFactorAgainstUSD: 1.05 },
  BRL: { code: 'BRL', symbol: 'R$', name: 'Brazilian Real', rateAgainstUSD: 5.42, pppFactorAgainstUSD: 0.45 },
};

export function convertUSDToCurrency(
  usdAmount: number,
  targetCurrencyCode: string,
  adjustForPPP: boolean = false
): { formatted: string; raw: number; currency: CurrencyRate } {
  const currency = SUPPORTED_CURRENCIES[targetCurrencyCode] || SUPPORTED_CURRENCIES.USD;
  let converted = usdAmount * currency.rateAgainstUSD;

  if (adjustForPPP && currency.code !== 'USD') {
    // In PPP mode, adjust relative purchasing power
    converted = converted / currency.pppFactorAgainstUSD;
  }

  if (currency.formatAsLakhs && targetCurrencyCode === 'INR') {
    if (converted >= 10000000) {
      return {
        formatted: `${currency.symbol}${(converted / 10000000).toFixed(2)} Cr`,
        raw: converted,
        currency,
      };
    }
    return {
      formatted: `${currency.symbol}${(converted / 100000).toFixed(1)} Lakhs`,
      raw: converted,
      currency,
    };
  }

  if (targetCurrencyCode === 'CNY' && converted >= 10000) {
    return {
      formatted: `${currency.symbol}${(converted / 10000).toFixed(1)}万`,
      raw: converted,
      currency,
    };
  }

  if (converted >= 1000) {
    return {
      formatted: `${currency.symbol}${Math.round(converted / 1000)}k`,
      raw: converted,
      currency,
    };
  }

  return {
    formatted: `${currency.symbol}${Math.round(converted).toLocaleString()}`,
    raw: converted,
    currency,
  };
}
