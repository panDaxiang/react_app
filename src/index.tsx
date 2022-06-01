import { FC } from 'react'
import { createRoot } from 'react-dom/client'

import InfiniteScrollWithHeight from './pages/stories/InfiniteScrollWithHeight'
import PullDownToRefreshInfScroll from './pages/stories/PullDownToRefreshInfScroll'
import ScrollableTargetInfScroll from './pages/stories/ScrollableTargetInfScroll'
import ScrolleableTop from './pages/stories/ScrolleableTop'
import WindowInfiniteScrollComponent from './pages/stories/WindowInfiniteScrollComponent'

import LongPage from '@/pages/longPage'

const App: FC = () => {
  // return <InfiniteScrollWithHeight />
  // return <PullDownToRefreshInfScroll />
  // return <ScrollableTargetInfScroll />
  // return <ScrolleableTop />
  // return <WindowInfiniteScrollComponent />

  return <LongPage />
}

createRoot(document.getElementById('root')).render(<App />)