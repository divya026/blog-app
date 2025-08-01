'use client'; 

import { ThemeContextProvider } from './themeContext/ThemeContext'; // ✅ Safe here
import ThemeProvider from './providers/ThemeProvider';

export default function ClientProviders({ children }) {
  return (
    <ThemeContextProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </ThemeContextProvider>
  );
}
