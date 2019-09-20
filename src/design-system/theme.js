
const themeLight =  {
    colors: {
      black: '#d5d5d5',
      white: '#fff',
      negtext: '#DCDCDC',
      text: '#303030',
      background: '#DCDCDC'
    },
  }

  const themeDark =  {
    colors: {
      button: '#000e1a',
      white: '#000e1a',
      negtext: '#303030',
      text: '#DCDCDC',
      background: '#303030'
    },
  }

  const theme = mode => (mode  ? themeDark : themeLight)
  export default theme;