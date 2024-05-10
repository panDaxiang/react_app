import { memo, useEffect, useRef } from 'react'

import { Graph } from '@antv/x6'
// import { Snapline } from '@antv/x6-plugin-snapline'
// import { Button } from 'antd'

import { data } from './data'

const commonAttrs = {
  body: {
    fill: '#fff',
    stroke: '#8f8f8f',
    strokeWidth: 1,
  },
  label: {
    refX: 0.5,
    refY: '100%',
    refY2: 4,
    textAnchor: 'middle',
    textVerticalAnchor: 'top',
  },
}


const X6Graph = () => {
  const containerRef = useRef(null)
  const graphRef = useRef<Graph>(null)

  useEffect(() => {
    const graph = new Graph({
      container: containerRef.current,
      // width: 800,
      height: 900,
      background: {
        color: '#fbfbfc',
      },
      // grid: {
      //   visible: true,
      //   type: 'doubleMesh',
      //   args: [
      //     {
      //       color: '#eee', // 主网格线颜色
      //       thickness: 1, // 主网格线宽度
      //     },
      //     {
      //       color: '#ddd', // 次网格线颜色
      //       thickness: 1, // 次网格线宽度
      //       factor: 4, // 主次网格线间隔
      //     },
      //   ],
      // },
      panning: true,
      mousewheel: true,
      connecting: {
        snap: true,
      }
    })

    // graph.addNode({
    //   shape: 'rect',
    //   x: 10,
    //   y: 10,
    //   width: 100,
    //   height: 40,
    //   label: 'rect',
    //   attrs: commonAttrs,
    // })

    graph.fromJSON(data)
    graph.centerContent()
    // graph.use(
    //   new Snapline({
    //     enabled: true,
    //   }),
    // )

    graph.on('node:moved', ({ e, x, y, node, view }) => {

      const id = node.id
      /** 获取所有的节点 */
      // console.log(graph.getNodes())

      /** 获取所有的边 */
      // const edges = graph.getEdges()
      // console.log(edges);

      // const id = node.id
      /** 获取节点的边 */
      const edges = graph.getConnectedEdges(id, { deep: true })
      /** 跟新边需要通过edge设置 */
      edges.forEach(edge => {
        // @ts-ignore
        const source = graph.getCellById(edge.source.cell)
        const target = edge.target

        console.log(source)
        // @ts-ignore
        // console.log(graph.getCellById(source.cell
        // ), target);
      })
    })

    graphRef.current = graph
  }, [])

  return <div>
    <div ref={containerRef} id="container"></div>

    {/* <Button onClick={() => {
      const json = graphRef.current.toJSON()
      console.log(json);
    }}>导出json</Button> */}
  </div>
}

export default memo(X6Graph)