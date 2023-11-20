import { useState } from 'react'

import Home from './pages/Home'
import Notification from './features/notification'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Notification/>
      <Home />
    </>
  )
}

export default App
