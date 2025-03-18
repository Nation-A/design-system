import * as Icons from '@nation-a/icons'
import { useTheme } from '@nation-a/ui'
function App() {
  const theme = useTheme()
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: '#999' }}>
      {Object.entries(Icons).map(([key, Icon]) => (
        <Icon id={key} key={key} size={60} color="#123456" />
      ))}
      {theme.semantic.colors.background.danger.default.value}
    </div>
  )
}

export default App
