/**
 * Formats a number as currency based on the specified currency code
 * @param amount - The amount to format
 * @param currency - The currency code (USD, JPY, etc.)
 * @returns Formatted currency string
 */
export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  const formatter = new Intl.NumberFormat(
    currency === 'JPY' ? 'ja-JP' : 'en-US',
    {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: currency === 'JPY' ? 0 : 2,
      maximumFractionDigits: currency === 'JPY' ? 0 : 2,
    }
  );

  return formatter.format(amount);
};

/**
 * Formats a number as a simple currency string without locale formatting
 * @param amount - The amount to format
 * @param currency - The currency symbol
 * @returns Simple formatted currency string
 */
export const formatSimpleCurrency = (amount: number, currency: string = '$'): string => {
  if (currency === '¥') {
    // Japanese Yen formatting (no decimals)
    return `${currency}${Math.abs(amount).toLocaleString()}`;
  } else {
    // USD and other currencies (with decimals)
    return `${currency}${Math.abs(amount).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }
}; 