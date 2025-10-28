import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageProvider } from '../contexts/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

const renderWithLanguageProvider = (component: React.ReactElement) => {
  return render(<LanguageProvider>{component}</LanguageProvider>);
};

describe('LanguageToggle', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorageMock.getItem.mockReturnValue('en');
  });

  it('renders language toggle button', () => {
    renderWithLanguageProvider(<LanguageToggle />);
    
    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toBeInTheDocument();
  });

  it('displays current language (EN) by default', () => {
    renderWithLanguageProvider(<LanguageToggle />);
    
    expect(screen.getByText('EN')).toBeInTheDocument();
    expect(screen.getByTitle('Switch to Japanese')).toBeInTheDocument();
  });

  it('toggles language when clicked', () => {
    renderWithLanguageProvider(<LanguageToggle />);
    
    const toggleButton = screen.getByRole('button');
    
    // Initial state should be EN
    expect(screen.getByText('EN')).toBeInTheDocument();
    
    // Click to toggle to JP
    fireEvent.click(toggleButton);
    
    // Should now show JP
    expect(screen.getByText('JP')).toBeInTheDocument();
    expect(screen.getByTitle('Switch to English')).toBeInTheDocument();
    
    // Click again to toggle back to EN
    fireEvent.click(toggleButton);
    
    // Should be back to EN
    expect(screen.getByText('EN')).toBeInTheDocument();
  });

  it('saves language preference to localStorage', () => {
    renderWithLanguageProvider(<LanguageToggle />);
    
    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);
    
    expect(localStorageMock.setItem).toHaveBeenCalledWith('adminLanguage', 'jp');
  });

  it('has proper accessibility attributes', () => {
    renderWithLanguageProvider(<LanguageToggle />);
    
    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toHaveAttribute('title', 'Switch to Japanese');
    expect(toggleButton).toHaveAttribute('type', 'button');
  });
}); 