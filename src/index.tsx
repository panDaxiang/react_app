import { createRoot } from 'react-dom/client'
// import X6Graph from './pages/x6Graph'
// import RelationGraph from './pages/relationGraph'
import CodeMirror from './codeMirror'

import './style.css'

const App = () => {

  return <div>
    <CodeMirror />
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
