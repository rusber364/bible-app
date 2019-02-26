import Typography from 'typography'
import elkGlenTheme from 'typography-theme-elk-glen'

elkGlenTheme.overrideThemeStyles = () => ({
  body: {
    fontSize: 'inherit',
  },
  a: {
    backgroundImage: 'none',
  },
})

const typography = new Typography(elkGlenTheme)

export default typography
