
const themeLight =  {
    colors: {
      black: '#fff',
      white: '#fff',
      blue: '#fff',
      heading: '#303030',
      background: '#fff'
    },
  }


  const themeDark =  {
    colors: {
      black: '#000e1a',
      white: '#000e1a',
      blue: '#000e1a',
      heading: '#fff',
      background: '#303030'
    },
  }

  const theme = mode => (mode  ? themeDark : themeLight)
  export default theme;