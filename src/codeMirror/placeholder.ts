import { EditorView, ViewUpdate, Decoration, DecorationSet, ViewPlugin, MatchDecorator, WidgetType } from '@codemirror/view';
import { configData } from './config'

enum MatchType {
  'function' = 'function',
  'indicator' = 'indicator'
}

class PlaceholderWidget extends WidgetType {
  constructor(readonly name: string, readonly type?: MatchType) {
    super()
  }
  eq(other: PlaceholderWidget) {
    return this.name == other.name
  }
  toDOM() {
    if (this.type) {
      let elt = document.createElement("span")
      elt.style.cssText = this.type === MatchType.function ? `color: #099dce;` : `color: red;`
      elt.textContent = this.name
      return elt
    }else{
      let eles = document.createDocumentFragment();
      for(let i = 0; i <  this.name.length; i++){
        let elt = document.createElement("span")
        elt.textContent = this.name[i]
        eles.appendChild(elt)
      }
      return eles as unknown as HTMLElement
    }
  }
  ignoreEvent() {
    return false
  }
}

const placeholderMatcher = new MatchDecorator({
  regexp: /([A-Za-z0-9_\u4e00-\u9fa5:：]+)/g,
  decoration: (match, view) => {
    const isMatch = configData.find(item => item.funcName === match[1] || item.title === match[1])
    if (isMatch) {
      return Decoration.replace({
        widget: new PlaceholderWidget(match[1], isMatch.isFunc ? MatchType.function : MatchType.indicator),
      })
    }

    else {
      return null
    }
  }
})

export const placeholders = ViewPlugin.fromClass(class {
  placeholders: DecorationSet
  constructor(view: EditorView) {
    this.placeholders = placeholderMatcher.createDeco(view)
  }
  update(update: ViewUpdate) {
    // console.log('placeholderMatcher', placeholderMatcher);
    this.placeholders = placeholderMatcher.updateDeco(update, this.placeholders)
  }
}, {
  decorations: instance => instance.placeholders,
  provide: plugin => EditorView.atomicRanges.of(view => {
    return view.plugin(plugin)?.placeholders || Decoration.none
  })
})

