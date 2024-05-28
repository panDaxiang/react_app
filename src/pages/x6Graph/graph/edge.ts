import { merge, cloneDeep } from 'lodash'

/** edge默认参数 */
export const edge = {
  shape: 'edge',
  /** 源节点 */
  // source: 'node1',
  /** 目标节点 */
  // target: 'node2',
  labels: [
    {
      attrs: {
        label: {
          // text: '666',
          fontSize: 12,
          fill: '#128bed',
        },
      },
      // position: {
      //   distance: -40,
      // },
    }
  ],
  attrs: {
    // line 是选择器名称，选中的边的 path 元素
    line: {
      stroke: 'rgb(227, 227, 227)',
      strokeWidth: 1,
      targetMarker: {
        name: 'block',
        size: 5,
        height: 10,
        fill: '#128bed',
        stroke: '#128bed',
        strokeWidth: 1
      }
    },
  },
  /** 路径点 */
  // vertices: [
  //   { x: 90, y: 110 },
  //   { x: 70, y: 110 },
  // ],
  router: 'er',
  connector: {
    name: 'jumpover',
    args: {
      type: 'arc',
      size: 5,
      radius: 5,
    },
  },
}

export const edgeData = [
  {
    source: 'root1',
    target: 'node_1',
    text: '执行事务合伙人 79.8674%'
  },
  {
    source: 'root1',
    target: 'bottom',
    text: '35.4938%'
  },
  {
    source: 'root1',
    target: 'node_2',
    text: '苏州知己网络科技中心（有限合伙）'
  },
  {
    source: 'root2',
    target: 'node_2',
    text: '35.4938%'
  },
  {
    source: 'root2',
    target: 'bottom',
    text: '12.1915%'
  },
  {
    source: 'node_1',
    target: 'bottom',
    text: '11.4938%'
  },
  {
    source: 'node_2',
    target: 'bottom',
    text: '5.4938%'
  },
]

export const edges = edgeData.map(o => merge(cloneDeep(edge), o, {
  labels: [
    {
      attrs: {
        label: {
          text: o.text
        }
      }
    }
  ]
}))