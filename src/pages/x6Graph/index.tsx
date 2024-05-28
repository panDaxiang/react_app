import { memo, useEffect, useRef } from 'react'

import { Graph } from '@antv/x6'
import { throttle } from 'lodash'
// import { Snapline } from '@antv/x6-plugin-snapline'
// import { Button } from 'antd'

import { data } from './data'
import { calculateLabelDistance } from './utils'

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

    graph.fromJSON(data)
    graph.centerContent()

    // 通过监听移动，设置label位置
    graph.on('node:moving', ({ node }) => {

      const id = node.id
      /** 获取所有的节点 */
      // console.log(graph.getNodes())

      /** 获取所有的边 */
      // const edges = graph.getEdges()
      // console.log(edges);

      /** 获取节点的边 */
      const edges = graph.getConnectedEdges(id, { deep: true })
      /** 跟新边需要通过edge设置 */
      edges.forEach(edge => {
        /** 起点 */
        const sourcePoint =  edge.getSourcePoint()
        /** 终点 */
        const targetPoint = edge.getTargetPoint()

        /** 获取之前的label属性 */
        const labels = edge.getLabels()
        /** 获取路径点, 如果存在根据坐标点，计算label位置 */
        const vertices =  edge.getVertices()

        // @ts-ignore
        const distance: number = labels[0].position.distance ?? labels[0].position

        const newDistance = calculateLabelDistance(sourcePoint, targetPoint, vertices, distance);

        /** 设置新的labels属性 */
        // edge.attr({
        //   attrs: {
        //     label: labels[0].attrs.label,
        //   },
        //   position: {
        //     distance: newDistance + 10,
        //   }
        // })
      })
    })

    graphRef.current = graph
  }, [])

  return <div>
    <div ref={containerRef} id="container"></div>
  </div>
}

export default memo(X6Graph)