
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove all theme classes first
    root.classList.remove("light", "dark");
    root.classList.remove("light-theme", "dark-theme");
    document.body.classList.remove("dark-theme", "light-theme");

    // Determine the actual theme (resolving system preference if needed)
    let actualTheme = theme;
    if (theme === "system") {
      actualTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    // Apply the theme classes
    root.classList.add(actualTheme);
    root.classList.add(`${actualTheme}-theme`);
    document.body.classList.add(`${actualTheme}-theme`);
    
    // Set data attribute for tailwind
    root.setAttribute("data-theme", actualTheme);

    // Apply additional class to body to ensure proper theme application
    if (actualTheme === 'light') {
      document.body.classList.add('bg-gray-100', 'text-gray-900');
      document.body.classList.remove('bg-gray-900', 'text-white');
    } else {
      document.body.classList.add('bg-gray-900', 'text-white');
      document.body.classList.remove('bg-gray-100', 'text-gray-900');
    }
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      
      const handleChange = () => {
        const root = window.document.documentElement;
        const systemTheme = mediaQuery.matches ? "dark" : "light";
        
        // Remove existing theme classes
        root.classList.remove("light", "dark");
        root.classList.remove("light-theme", "dark-theme");
        document.body.classList.remove("dark-theme", "light-theme");
        
        // Add new theme classes
        root.classList.add(systemTheme);
        root.classList.add(`${systemTheme}-theme`);
        document.body.classList.add(`${systemTheme}-theme`);
        
        root.setAttribute("data-theme", systemTheme);

        // Apply additional class to body for theme
        if (systemTheme === 'light') {
          document.body.classList.add('bg-gray-100', 'text-gray-900');
          document.body.classList.remove('bg-gray-900', 'text-white');
        } else {
          document.body.classList.add('bg-gray-900', 'text-white');
          document.body.classList.remove('bg-gray-100', 'text-gray-900');
        }
      };
      
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
