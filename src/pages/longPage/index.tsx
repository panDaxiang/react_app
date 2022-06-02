import { FC, useState } from 'react'

import Card from './card'

const LongPage: FC = () => {
  const [list] = useState(new Array(100000).fill(0));

  return <ul style={{ height: '800px', overflowY: 'auto' }}>
    {
      list.map((item, index) => <Card key={index} />)
    }
  </ul>
}

export default LongPage