import { FC } from 'react'
import { createRoot } from 'react-dom/client'

import InfiniteScrollWithHeight from './stories/InfiniteScrollWithHeight'
import PullDownToRefreshInfScroll from './stories/PullDownToRefreshInfScroll'
import ScrollableTargetInfScroll from './stories/ScrollableTargetInfScroll'
import ScrolleableTop from './stories/ScrolleableTop'
import WindowInfiniteScrollComponent from './stories/WindowInfiniteScrollComponent'

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