
const themeLight =  {
    colors: {
      black: '#d5d5d5',
      white: '#fff',
      blue: '#fff',
      heading: '#303030',
      background: '#DCDCDC'
    },
  }


  const themeDark =  {
    colors: {
      black: '#000e1a',
      white: '#000e1a',
      blue: '#000e1a',
      heading: '#DCDCDC',
      background: '#303030'
    },
  }

  const theme = mode => (mode  ? themeDark : themeLight)
  export default theme;