import * as Icons from '@nation-a/icons'

function App() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: '#999' }}>
      {Object.entries(Icons).map(([key, Icon]) => (
        <Icon id={key} key={key} size={60} color='#123456' />
      ))}
    </div>
  )
}

export default App
