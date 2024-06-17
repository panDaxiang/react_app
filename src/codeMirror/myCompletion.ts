import { CompletionContext } from '@codemirror/autocomplete';
import { configData } from './config'

const options = configData.map(config => {
  return {
    label: config.title,
    type: config.isFunc ? 'function' : 'indicator'
  }
})

/** 处理输入匹配的 */
export function myCompletions(context: CompletionContext) {
  /** 找出光标前的哪一段文本可以完成 */
  const word = context.matchBefore(/\w*/)
  // console.log(word)
  if (word.from === word.to && !context.explicit){
    return null
  }

  return {
    from: word.from,
    options: options,
  }
}