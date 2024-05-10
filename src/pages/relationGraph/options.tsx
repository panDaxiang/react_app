import { RGOptions } from 'relation-graph/react';
import waterImg from './graphWaterMark.png'
  
  // 关系图属性配置
  export const graphOptions: RGOptions = {
    backgroundImage: waterImg,
    backgroundImageNoRepeat: false,
    debug: false,
    layout: {
      // 布局方式（tree树状布局/center中心布局/force自动布局）
      layoutName: 'tree',
      // from: 'top',
      min_per_width: 180,
      min_per_height: 100,
      max_per_height: 180,
      distance_coefficient: 1,
      // max_per_height: 180,
    },
    // 默认的节点形状，0:圆形；1:矩形
    defaultNodeShape: 1,
    defaultNodeWidth: 150,
    defaultNodeHeight: 50,
    defaultLineShape: 4,
    defaultJunctionPoint: 'tb',
    defaultNodeColor: '#f6fbfe',

    moveToCenterWhenRefresh: true,
    /** 默认的节点文字颜色 */
    defaultNodeFontColor: '#333',
    // 默认的节点边框颜色
    defaultNodeBorderColor: '#3691db',
    defaultNodeBorderWidth: 1,
    defaultExpandHolderPosition: 'bottom',
    defaultExpandHolderColor: '#3691db',

    // defaultLineTextOffset_x: 8,
    // defaultLineTextOffset_y: 3,


    defaultLineColor: '#3691db',
    defaultLineFontColor: '#3691db',
    defaultLineMarker: {
      markerWidth: 25,
      markerHeight: 25,
      refX: 0,
      refY: 3,
      data: 'M 0 0, V 6, L 4 3, Z',
      color: 'red'
    },

    allowSwitchLineShape: true,
    allowSwitchJunctionPoint: true,
    reLayoutWhenExpandedOrCollapsed: true,
    placeSingleNode: true,
    placeOtherNodes: true,
  };