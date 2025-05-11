export type Theme = 'light' | 'dark';

const THEME_KEY = 'app-theme';

export const getStoredTheme = (): Theme => {
  const storedTheme = localStorage.getItem(THEME_KEY) as Theme;
  return storedTheme || 'light';
};

export const setStoredTheme = (theme: Theme) => {
  localStorage.setItem(THEME_KEY, theme);
};

export const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  setStoredTheme(theme);
};

export const initializeTheme = () => {
  const theme = getStoredTheme();
  applyTheme(theme);
};
