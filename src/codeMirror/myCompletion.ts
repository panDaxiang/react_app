import { CompletionContext, snippetCompletion  } from '@codemirror/autocomplete';


/** 处理输入匹配的 */
export function myCompletions(context: CompletionContext) {
  console.log(context)
  /** 找出光标前的哪一段文本可以完成 */
  const word = context.matchBefore(/\w*/)
  // console.log(word)
  if (word.from === word.to && !context.explicit){
    return null
  }

  return {
    from: word.from,
    options: [
      { label: "abs()", type: "function" },
      { label: "exp()", type: "keyword" },
      { label: "sort()", type: "variable", },
      { label: "log(,)", type: "function", apply: "LOG()",},
      { label: "ln()", type: "text", apply: "ln()", detail: "这里描述详情" },
      { label: "gdp", type: "text", apply: "gdp_当前年份"},
      { label: "eee", type: "text", apply: "eeee"},
    ]
  }
}