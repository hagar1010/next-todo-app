'use client';
import { useThemeStore } from '@/store/themeStore';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full text-2xl font-bold flex items-center justify-center transition-all duration-300 shadow-lg
        theme-btn
        hover:scale-105 active:scale-95
      `}
    //   aria-label="Toggle Theme"
    >
      {theme === 'dark' ? '☀︎' : '⏾'}
    </button>
  );
}
