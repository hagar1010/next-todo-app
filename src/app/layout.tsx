import './globals.css'
import ThemeToggle from '@/components/ThemeToggle'
import ThemeMountScript from '@/components/ThemeMountScript'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ThemeToggle />
        <ThemeMountScript />
      </body>
    </html>
  );
}
