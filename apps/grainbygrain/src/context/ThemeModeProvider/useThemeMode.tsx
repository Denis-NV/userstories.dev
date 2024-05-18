import { useContext } from 'react'
import { ThemeProviderContext } from '.'

const useThemeMode = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error('useThemeMode must be used within a ThemeProvider')

  return context
}

export default useThemeMode
