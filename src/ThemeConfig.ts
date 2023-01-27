import {createTheme, PaletteOptions, Palette} from "@mui/material/styles";

const lightMode = {
  primary: "#2999C9",
  black: "#000"
};
const darkMode = {
  primary: "#175570",
  black: "#fff"
};

export interface NuiPaletteProps extends Palette {
  palette: {
    toggle: {
      main: string;
      thumb: string;
    }
  }
}

interface ExtraPaletteOptions {
  toggle: {
    main: string,
    thumb: string
  }
}

const palette = (isDark: boolean): PaletteOptions & ExtraPaletteOptions => ({
  primary: {
    main: isDark ? darkMode.primary : lightMode.primary,
  },
  secondary: {
    main: "#1A2858",
  },
  text: {
    primary: "#000",
    secondary: "#aaa",
  },
  toggle: {
    main: isDark ? "#a8a8a8" : "#ddd",
    thumb: isDark ? "#8c8c8c" : "#ddd",
  },
  common: {
    black: isDark ? darkMode.black : lightMode.black
  },
  grey: {
    50: '#f2f4f5',
    // 100: string,
    // 200: string,
    // 300: string,
    // 400: string,
    500: '#666',
    // 600: string,
    // 700: string,
    // 800: string,
    // 900: string,
    // A100: string,
    // A200: string,
    // A400: string,
    // A700: string,
  }
});

const commonStyle = {
  typography: {
    fontFamily: '"Noto Sans KR", "Roboto", "Helvetica", "Arial", sans-serif',
  }
}

export const fonts = {
  fontSize: {
    font20: '1.25rem',
    font18: '1.125rem',
    fontBase: '1rem',
    font14: '0.875rem',
    font12: '0.75rem',
    font10: '0.625rem',
    font8: '0.5rem',
  }
}

const lightTheme = createTheme({
  ...commonStyle,
  palette: {
    ...palette(false)
  }
});

const darkTheme = createTheme({
  ...commonStyle,
  palette: {
    ...palette(true)
  }
});

export {lightTheme, darkTheme};
