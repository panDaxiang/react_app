export const staticJsonData = {
  // 根节点唯一id
  rootId: 'root',
  nodes: [
    { id: 'root1', text: '陈德强', fontColor: '#fff', color: '#3691db' },
    { id: 'root2', text: '杨京' },
    { id: 'node_1', text: '苏州知彼信息科技中心（有限合伙）' },
    { id: 'node_2', text: '苏州知己网络科技中心（有限合伙）', data: { tag: '上市' } },
    { id: 'bottom', text: '企查查科技股份有限公司' },
    // { id: 'level_5', text: '上海期货交易所' },

    // { id: 'level_5_1', text: '中国建筑集团有限公司' },
    // { id: 'level_5_2', text: '河北交通投资集团有限公司',},

    // { id: 'level_6', text: '中国证监会', data: { title: '', contentTitle: '最终收益股份', value: '0.1693%' } },
    // { id: 'level_6_1', text: '全国社保基金四一三组合', data: { title: '', contentTitle: '最终收益股份', value: '0.2499%' } },
    // { id: 'level_6_2', text: '中国工商银行股份有限公司-华泰柏瑞沪深300交易型开放式指数证券投资基金', data: { title: '', contentTitle: '最终收益股份', value: '0.1683%' } },

    // { id: 'level_6_3', text: '国务院国有资产监督管理委员会', data: { title: '实际控制人', contentTitle: '最终收益股份', value: '29.58%', color: 'red' } },
    // { id: 'level_6_4', text: '河北省人民政府国有资产监督管理委员会', data: { contentTitle: '最终收益股份', value: '49%' } },
   
    // { id: 'level_6_5', text: '刘吉诚', data: { type: 'person', title: '最终受益人' }},
  ],
  lines: [
    { from: 'node_2', to: 'bottom', text: '30.6%', },
    { from: 'node_1', to: 'bottom', text: '20.4%', },
    // { from: 'level_3', to: 'level_2', text: '49%', },
    // { from: 'level_3', to: 'level_1', text: '49%', },
    { from: 'root2', to: 'bottom', text: '49%', },
    { from: 'root1', to: 'bottom', text: '49%', },
    { from: 'root1', to: 'node_2', text: '49%', },
    { from: 'root1', to: 'node_1', text: '49%', },
    { from: 'root2', to: 'node_2', text: '49%', },
    // { from: 'level_6', to: 'level_5', text: '49%', },
  ]
}

export const fromsMap = {}

for(let i = 0; i < staticJsonData.lines.length; i++){
  const item = staticJsonData.lines[i]
  if(fromsMap[item.to]){
    fromsMap[item.to].push(item)
  }else{
    fromsMap[item.to] = [item]
  }
}
