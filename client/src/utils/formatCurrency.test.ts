import { describe, it, expect } from 'vitest';
import { formatCurrency } from './formatCurrency';

describe('formatCurrency', () => {
  it('formats USD currency correctly', () => {
    expect(formatCurrency(1234.56, 'USD')).toBe('$1,234.56');
    expect(formatCurrency(0, 'USD')).toBe('$0.00');
    expect(formatCurrency(999999.99, 'USD')).toBe('$999,999.99');
  });

  it('formats JPY currency correctly', () => {
    expect(formatCurrency(1234, 'JPY')).toBe('¥1,234');
    expect(formatCurrency(0, 'JPY')).toBe('¥0');
    expect(formatCurrency(999999, 'JPY')).toBe('¥999,999');
  });

  it('handles negative values', () => {
    expect(formatCurrency(-1234.56, 'USD')).toBe('-$1,234.56');
    expect(formatCurrency(-1234, 'JPY')).toBe('-¥1,234');
  });

  it('handles zero values', () => {
    expect(formatCurrency(0, 'USD')).toBe('$0.00');
    expect(formatCurrency(0, 'JPY')).toBe('¥0');
  });

  it('handles large numbers', () => {
    expect(formatCurrency(1234567.89, 'USD')).toBe('$1,234,567.89');
    expect(formatCurrency(1234567, 'JPY')).toBe('¥1,234,567');
  });

  it('defaults to USD when currency is not specified', () => {
    expect(formatCurrency(1234.56)).toBe('$1,234.56');
  });
}); 