import {createTheme, PaletteOptions, Palette} from "@mui/material/styles";
import {Components} from "@mui/material/styles/components";
import {Theme} from "@mui/material/styles/createTheme";

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
  },
  card: {
    main: string
  },
  body: {
    main: string
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
    primary: isDark ? "#fff" : "#000",
    secondary: "#aaa",
  },
  toggle: {
    main: isDark ? "#a8a8a8" : "#ddd",
    thumb: isDark ? "#8c8c8c" : "#ddd",
  },
  card: {
    main: isDark ? "#1e1e1e" : "#ffffff",
  },
  common: {
    black: isDark ? darkMode.black : lightMode.black
  },
  body: {
    main: isDark ? '#121212' : '#F8F9FA',
  },
  grey: {
    50: isDark ?  '#1c1c1c' : '#f2f4f5',
    // 100: isDark ?  '#1c1c1c' : '#f2f4f5',
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
  },
  fontWeight: {

  }
}

const CssBaselineOverride = (isDark: boolean): Components<Omit<Theme, 'components'>> => {
  return (
    {
      MuiCssBaseline: {
        styleOverrides: () => `
          html {
            font-size: 14px;
          }
          body {
            background: ${palette(isDark).body.main};
          }
        `,
      }
    }
  );
};

const lightTheme = createTheme({
  ...commonStyle,
  components: {
    ...CssBaselineOverride(false),
  },
  palette: {
    ...palette(false)
  }
});

const darkTheme = createTheme({
  ...commonStyle,
  components: {
    ...CssBaselineOverride(true)
  },
  palette: {
    ...palette(true)
  }
});

export {lightTheme, darkTheme};
