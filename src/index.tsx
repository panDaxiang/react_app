import { createRoot } from 'react-dom/client'
import X6Graph from './pages/x6Graph'

import './style.css'

const App = () => {

  return <div>
    <X6Graph />
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
