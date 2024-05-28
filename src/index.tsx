import { createRoot } from 'react-dom/client'
import X6Graph from './pages/x6Graph'
import RelationGraph from './pages/relationGraph'

import './style.css'

const App = () => {

  return <div>
    <X6Graph />
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
