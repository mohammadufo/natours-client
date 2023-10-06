import {
  createTheme,
  PaletteColor,
  SimplePaletteColorOptions,
} from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {}

  interface PaletteOptions {}
}

export const MuiTheme = createTheme({
  palette: {
    primary: { main: '#55c57a' },
  },
})
