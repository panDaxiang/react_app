export const staticJsonData = {
  // 根节点唯一id
  rootId: 'root',
  nodes: [
    { id: 'root', text: '中建路桥集团有限公司', fontColor: '#fff', color: '#3691db' },
    { id: 'level_1', text: '中建交通建设集团有限公司' },
    { id: 'level_2', text: '中国建筑一局（集团）有限公司' },
    { id: 'level_3', text: '中国建筑股份有限公司', data: { tag: '上市' } },
    { id: 'level_4', text: '中国证券金融股份有限公司' },
    { id: 'level_5', text: '上海期货交易所' },

    { id: 'level_5_1', text: '中国建筑集团有限公司' },
    { id: 'level_5_2', text: '河北交通投资集团有限公司',},

    { id: 'level_6', text: '中国证监会', data: { title: '', contentTitle: '最终收益股份', value: '0.1693%' } },
    // { id: 'level_6_1', text: '全国社保基金四一三组合', data: { title: '', contentTitle: '最终收益股份', value: '0.2499%' } },
    // { id: 'level_6_2', text: '中国工商银行股份有限公司-华泰柏瑞沪深300交易型开放式指数证券投资基金', data: { title: '', contentTitle: '最终收益股份', value: '0.1683%' } },

    // { id: 'level_6_3', text: '国务院国有资产监督管理委员会', data: { title: '实际控制人', contentTitle: '最终收益股份', value: '29.58%', color: 'red' } },
    // { id: 'level_6_4', text: '河北省人民政府国有资产监督管理委员会', data: { contentTitle: '最终收益股份', value: '49%' } },
   
    // { id: 'level_6_5', text: '刘吉诚', data: { type: 'person', title: '最终受益人' }},
  ],
  lines: [
    { from: 'level_1', to: 'root', text: '30.6%', },
    { from: 'level_2', to: 'level_1', text: '20.4%', },
    // { from: 'level_3', to: 'level_2', text: '49%', },
    // { from: 'level_3', to: 'level_1', text: '49%', },
    { from: 'level_3', to: 'root', text: '49%', },
    { from: 'level_4', to: 'level_3', text: '49%', },
    { from: 'level_5', to: 'level_4', text: '49%', },
    { from: 'level_5_1', to: 'level_3', text: '49%', },
    { from: 'level_5_2', to: 'root', text: '49%', },
    { from: 'level_6', to: 'level_5', text: '49%', },
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
