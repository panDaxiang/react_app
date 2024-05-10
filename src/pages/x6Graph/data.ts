export const data = {
  nodes: [
    {
      id: 'node1',
      shape: 'rect',
      x: 40,
      y: 40,
      width: 100,
      height: 40,
      label: 'hello',
      attrs: {
        // body 是选择器名称，选中的是 rect 元素
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6,
        },
      },
    },
    {
      id: 'node2',
      shape: 'rect',
      x: 20,
      y: 180,
      width: 100,
      height: 40,
      label: 'world',
      attrs: {
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6,
        },
      },
    },
    {
      id: 'node3',
      shape: 'rect',
      x: 200,
      y: 180,
      width: 100,
      height: 40,
      label: 'world2',
      attrs: {
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6,
        },
      },
    },
  ],
  edges: [
    {
      shape: 'edge',
      /** 源节点 */
      source: 'node1',
      /** 目标节点 */
      target: 'node2',
      labels: [
        {
          attrs: {
            label: {
              text: '666',
              fontSize: 12,
              fill: '#128bed',
            },
          },
          position: {
            distance: 0.5,
          },
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
            strokeWidth:1
          }
        },
      },
      /** 路径点 */
      vertices: [
        { x: 90, y: 110 },
        { x: 70, y: 110 },
      ],
      connector: {
        name: 'jumpover',
        args: {
          type: 'arc',
          size: 5,
          radius: 5,
        },
      },
    },
    {
      shape: 'edge',
      source: 'node1',
      target: 'node3',
      labels: [
        {
          attrs: {
            label: {
              text: 'X6',
              fontSize: 12,
              fill: '#128bed',
            },
          },
          position: -30,
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
            strokeWidth:1
          }
        },
      },
      /** 路径点 */
      vertices: [
        { x: 90, y: 110 },
        { x: 250, y: 110 },
      ],
      connector: {
        name: 'jumpover',
        args: {
          type: 'arc',
          size: 5,
          radius: 5,
        },
      },
    },
  ],
}