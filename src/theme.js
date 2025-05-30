import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: "linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)",
        color: "white",
        fontFamily: "'Inter', sans-serif",
      },
    },
  },
  colors: {
    brand: {
      50: "#e6f3ff",
      100: "#bae1ff",
      200: "#8dceff",
      300: "#60bbff",
      400: "#33a8ff",
      500: "#0696ff",
      600: "#0578cc",
      700: "#045a99",
      800: "#023c66",
      900: "#011e33",
    },
    purple: {
      50: "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#8b5cf6",
      600: "#7c3aed",
      700: "#6d28d9",
      800: "#5b21b6",
      900: "#4c1d95",
    },
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif",
  },
});

export default theme;
