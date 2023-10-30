import { createRoot } from 'react-dom/client'

import AgGridTable from '@/pages/agGridTable'

const App = () => {
  return <div>
    <AgGridTable />
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
